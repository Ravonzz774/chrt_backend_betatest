let n=document.getElementById("search-subtitle");n.style.display="block";n.innerText="Здесь будет список преподавателей...";document.getElementById("search-input").addEventListener("input",function(s){n.style.display="none",document.getElementById("search");let c=s.target.value.toLowerCase(),r=["Абдрахманова Зульфия Амуровна","Абдулин Артур Ахмадулович","Алешина Вероника Валерьевна"," Андронова Маргарита Наилевна"," Архипова Марина Николаевна"," Ахмадеева Виктория Олеговна"," Ахметова Анжела Эдуардовна"," Балдина Евгения Анатольевна","Басенко Дмитрий Сергеевич"," Булатов Александр Сергеевич","Веркина Юлия Алексеевна"," Войстрикова Ирина Александровна"," Голубьевская Дарья Олеговна","Дубровина Ольга Сергеевна"," Елисеев Егор Дмитриевич"," Еремин Алексей Александрович"," Жукова Кристина Ивановна","Жукова Наталья Вячеславовна"," Иванова Наталья Михайловна"," Карпенко Татьяна Николаевна"," Кичуткин Владимир Александрович"," Кондуров Евгений Васильевич","Корсун Лариса Борисовна","Костомаров Данил Вадимович"," Криванов Александр Аркадьевич","Литке Марина Игоревна","Микрюков Алексей Александрович"].filter(function(t){return t.toLowerCase().includes(c)}),e=document.querySelector(".results");e?e.innerHTML="":(e=document.createElement("div"),e.classList.add("results")),r.forEach(function(t){let l=document.createElement("p");l.textContent=t,e.appendChild(l)}),search.appendChild(e)});