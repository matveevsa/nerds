var link = document.querySelector(".contacts__link");
		var popup = document.querySelector(".modal");
		var close = document.querySelector(".modal__close");

		link.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.add("modal__show");
		});
		
		close.addEventListener("click", function(evt) {
			evt.preventDefault();
			popup.classList.remove("modal__show");
		});