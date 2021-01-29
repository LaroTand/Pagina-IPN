window.addEventListener('load', () => 
{
	// initial slide
	let slide = 1;

	// total slides
	let slides = document.querySelectorAll(".thmbnails li");

	total = slides.length;

	numImg = 3;

	limSuperior = 0;
	limInferior = 0;

	divImg = numImg / 2;

	if((divImg -  parseInt(divImg, 10)) == 0.5)
	{
		limSuperior = parseInt(divImg);
		limInferior = parseInt(divImg);
	}
	else
	{
		limSuperior = divImg;
		limInferior = divImg-1;
	}

	slide = limInferior + 1;

	showSlide(slide);
	next = document.querySelector(".nextVertical");
	prev = document.querySelector(".prevVertical");

	/**
	* event next button
	*/
	next.addEventListener('click', (evt) => 
	{
		evt.preventDefault();
		slide++;
		if ((slide + limSuperior) > total) 
		{ 
			 slide--;
		}
		else
		{
			showSlide(slide);
		}
		
	})
	/** 
	* event prev button
	*/
	prev.addEventListener("click", (evt) => 
	{
		evt.preventDefault();
		slide--;
		if ((slide - limInferior) < 1) 
		{ 
			 slide++;
		}
		else
		{
			showSlide(slide);
		}
		
	})

	function showSlide(n) 
	{
		n--; // decrement 1
		limInf = n - limInferior;
		limSup = n + limSuperior;

		for (i = 0; i < slides.length; i++)
		{
			if (i >= limInf && i <= limSup) 
			{
				slides[i].style.display = "block";
			}
			else
			{
				slides[i].style.display = "none";
			}
			
		}
	}
})