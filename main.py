from flask import Flask, request, jsonify, make_response, render_template, send_from_directory
from flask_cors import CORS
import schedule
import time
import get_timetable
import threading

app = Flask(__name__, template_folder='dist')
CORS(app, supports_credentials=True)


def update_timetable():

    global timetable
    global timetable_next
    # Получаем расписание и сохраняем его в переменную
    timetable = get_timetable.get("https://chrt.remmody.ru/v2/api")
    timetable_next = get_timetable.get("https://chrt.remmody.ru/v2/api?next")


    print("Обновил расписание.")

# Запускаем задачу обновления расписания каждые 5 минут
schedule.every(5).minutes.do(update_timetable)

# Функция для обработки запроса на получение расписания
@app.route("/api/timetable", methods=["GET"])
def get_tt():
    return timetable

@app.route("/api/timetable_next", methods=["GET"])
def get_tt_next():
    return timetable_next

@app.route('/<path:path>')
def send_static(path):
    return send_from_directory('dist', path)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":

    update_timetable()

    # Запускаем планировщик задач в отдельном потоке
    def run_scheduler():
        while True:
            schedule.run_pending()
            time.sleep(1)
    
    scheduler_thread = threading.Thread(target=run_scheduler, daemon=True)
    scheduler_thread.start()

    # Запускаем Flask приложение
    app.run()