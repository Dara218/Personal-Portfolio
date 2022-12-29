$(document).ready(function(){
    const date = new Date()
    let year = date.getFullYear()

    $('#date').text(year)
    
    const body = $('body')
  
    const centerContainer1 = $('.center-container1').offset().top
    const centerContainer2 = $('.center-container2').offset().top
    const centerContainer3 = $('.center-container3').offset().top

    $(this).on('scroll', function(){

        const a = $('#projects')
        const input = $('.contact-me input')
        const leftPanel = $('.left-panel ul a')
        const rightPanel = $('.right-panel a')
        const aLink = $('.center-container3 p a')

        if(scrollY >= centerContainer1){
            leftPanel.hide()
            rightPanel.hide()
        }
        
        else{
            leftPanel.show()
            rightPanel.show()
        }

        if(scrollY >= centerContainer3 - 50){
            body.addClass('changeColor')
            input.addClass('changeColorText')
            aLink.addClass('changeColorTextLink')
            leftPanel.show().addClass('changeColorText')
            rightPanel.show().addClass('changeColorText')
        }
        else{
            body.removeClass('changeColor')
            input.removeClass('changeColorText')
            aLink.removeClass('changeColorTextLink')
            leftPanel.removeClass('changeColorText')
            rightPanel.removeClass('changeColorText')
        }
    })

    const hamburgerBtn = $('.fa-bars')

    hamburgerBtn.on('click', function(){
        const hamburgerMenu = $('.hamburger-menu')
        hamburgerMenu.slideToggle('active')
    })

    const projects = 
    [
        {
            id: 1,
            name: 'Project Name1',
            photo: 'https://picsum.photos/350/200/?random=1',
        },

        {
            id: 2,
            name: 'Project Name2',
            photo: 'https://picsum.photos/350/200/?random=2',
        },

        {
            id: 3,
            name: 'Project Name3',
            photo: 'https://picsum.photos/350/200/?random=3',
        },

        {
            id: 4,
            name: 'Project Name4',
            photo: 'https://picsum.photos/350/200/?random=4',
        },

        {
            id: 5,
            name: 'Project Name5',
            photo: 'https://picsum.photos/350/200/?random=5',
        }
    ]
    const projectWrapper = $('.project-wrapper')

    let eachProductsMap = projects.map(function(eachMap){
        return `<div class="project-item">
        <img src="${eachMap.photo}" alt="project 1">
        <div class="project-details">
            <div class="project-title">${eachMap.name}</div>
            <span>
            <i class="fa-brands fa-github"></i>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
        </div>
    </div>`
    })

    function loadProjects(){       
        projectsSlice1 = eachProductsMap.slice(0, 3)
        projectWrapper.html(projectsSlice1)
    }

    loadProjects()

    const loadMoreBtn = $('.fa-arrow-down')
    let currentProjectCount = 3

    loadMoreBtn.on('click', function(){
        currentProjectCount++
        loadMore(currentProjectCount)

        if(currentProjectCount === projects.length){
            $(this).slideUp()
        }
        else{
            $(this).slideDown()
        }
    })

    function loadMore(currentProjectCount){
        projectsSlice1 = eachProductsMap.slice(0, currentProjectCount)

        projectWrapper.html(projectsSlice1)
        console.log(currentProjectCount);
    }

    const aboutBtn = $('#about')
    const projectsBtn = $('#projects')
    const contactBtn = $('#contact')

    aboutBtn.on('click', function(){
       window.scrollTo(0, centerContainer2)
    })

    projectsBtn.on('click', function(){
        window.scrollTo(0, centerContainer3)
    })

    contactBtn.on('click', function(){
        window.scrollTo(0, $(document).height())
    })

    const aboutBtnBurger = $('#aboutBurger')
    const projectsBtnBurger = $('#projectsBurger')
    const contactBtnBurger = $('#contactBurger')

    aboutBtnBurger.on('click', function(){
       window.scrollTo(0, centerContainer2)
    })

    projectsBtnBurger.on('click', function(){
        window.scrollTo(0, centerContainer3)
    })

    contactBtnBurger.on('click', function(){
        window.scrollTo(0, $(document).height())
    })

})