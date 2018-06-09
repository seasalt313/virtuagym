
//Initialization 
window.addEventListener('load', function () {
    imageMapping();
    flagMapping();
})

//Map images from assets folder
imageMapping = () => {
    let i = 0;

    //Array of image captions
    const imageCaption = [
        'The Rookie Academy',
        'Women fighting weight',
        'Benefits of Fruit',
        'Home Workout',
        'iOS Virtuagym Users',
        'Hardcore',
        'Workout Beats',
        'Android Virtuagym Users'
    ]

    while (i < 8) {
        //Declare variables
        let imagem, imageList, li, thumbnail, caption;

        //Assign to HTML elements
        imagem = document.createElement('IMG');
        imageList = document.querySelector('.image-list');
        li = document.createElement('li');
        thumbnail = document.createElement('div');
        caption = document.createElement('div');

        li.classList.add('col-sm-6', 'col-md-4', 'col-lg-3'); //Bootstrap classes for each item
        imagem.src = 'assets/' + i + '.png'; //Image source
        imagem.alt = imageCaption[i]; //SEO friendly alt tag
        thumbnail.classList.add('thumbnail'); //Bootstrap image gallery class
        caption.classList.add('caption'); //Bootstrap image caption class

        //Build list in HTML here:
        imageList.appendChild(li);
        li.appendChild(thumbnail);
        thumbnail.appendChild(imagem);
        thumbnail.appendChild(caption);

        caption.innerHTML = imageCaption[i];

        i++
    }
}

//Map flag icons from assets folder
flagMapping = () => {
    let i = 0;

    //Alt tags for language selection
    const flagAltTag = [
        'Arabic',
        'Spanish',
        'Portugese',
        'Italian',
        'French',
        'German',
        'English'
    ]

    while (i < 7) {
        //Declare variables
        let flagIcon, flagList, li, thumbnail;

        //Assign to HTML elements
        flagIcon = document.createElement('IMG');
        flagList = document.querySelector('.flag-list');
        li = document.createElement('li');
        thumbnail = document.createElement('div');

        li.classList.add('col-md-1'); //Bootstrap classes for each item
        flagIcon.src = 'assets/icons/flags/' + i + '.png'; //Image source
        flagIcon.alt = flagAltTag[i]; //SEO friendly alt tag
        thumbnail.classList.add('thumbnail'); //Bootstrap image gallery class

        //Build list in HTML here:
        flagList.appendChild(li);
        li.appendChild(thumbnail);
        thumbnail.appendChild(flagIcon);

        i++
    }
}

//Search the page 
filter = () => {
    // Declare variables
    let input, filter, ul, li, a, i;

    //Assign to HTML elements
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.querySelector('.image-list');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        imageCap = li[i].querySelector('.caption');
        if (imageCap.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}

//Add group to list
addGroup = () => {
    //Declare Variables
    let input, imageList, uploadedImage, li, imagem, thumbnail, caption;

    //Assign to HTML
    input = document.querySelector('#addGroupInput');
    imageList = document.querySelector('.image-list');
    uploadedImage = document.querySelector('#uploadImage');
    li = document.createElement('li');
    imagem = document.createElement('IMG');
    thumbnail = document.createElement('div');
    caption = document.createElement('div');

    li.classList.add('col-sm-6', 'col-md-4', 'col-lg-3'); //Bootstrap responsive classes for each item
    thumbnail.classList.add('thumbnail'); //Bootstrap image gallery class
    caption.classList.add('caption'); //Bootstrap image caption class

    imagem.alt = input.value //SEO friendly alt tag
    caption = input.value // Caption

    let fr = new FileReader();
    imagem.src = fr.result + '.png';

    imageList.appendChild(li);
    li.appendChild(thumbnail);
    thumbnail.appendChild(imagem);
    thumbnail.appendChild(caption);

}

