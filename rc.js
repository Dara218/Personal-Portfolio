$(document).ready(function(){
    const date = new Date()
    let year = date.getFullYear()

    $('#date').text(year)
    
    const body = $('body')
  
    const centerContainer1 = $('.center-container1').offset().top
    const centerContainer2 = $('.center-container2').offset().top
    const centerContainer3 = $('.center-container3').offset().top
    const mainNavEl = $('.main-nav')
    
    let lastScroll = scrollY

    $(this).on('scroll', function(){

        const a = $('#projects')
        const input = $('.contact-me input')
        const leftPanel = $('.left-panel ul a')
        const rightPanel = $('.right-panel a')
        const aLink = $('.center-container3 p a')
        const hamburgerMenu = $('.hamburger-menu')

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

        let currentScroll = scrollY

        if(lastScroll > currentScroll){
            mainNavEl.css({
                top: '0'
            })

            hamburgerMenu.css({
                top: '60px'
            })
        }

        else{
            mainNavEl.css({
                top: '-100px'
            })

            hamburgerMenu.css({
                top: '-200px'
            })

        }

        lastScroll = currentScroll
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
            name: 'Basic Dept Clone',
            photo: 'https://serving.photos.photobox.com/15258501aaf77618d881ba6ca0323f984181eacbfe5274c4f132d4438b63298bae882f7a.jpg',
            githubLink: 'https://github.com/Dara218/Basic-Dept-clone',
            link: 'https://dara218.github.io/Basic-Dept-clone/index.html',
        },

        {
            id: 2,
            name: 'Monstercat Clone',
            photo: 'https://serving.photos.photobox.com/86788010c591b73fd3ba968648d25f185753f5d078fd32dfa36c53ae0917c3aa930364be.jpg',
            githubLink: 'https://github.com/Dara218/Level-Days-clone',
            link: 'https://dara218.github.io/Level-Days-clone/',
        },

        {
            id: 3,
            name: 'Bonsai - Pricing Clone',
            photo: 'https://serving.photos.photobox.com/746410247ec2fba1cddd3ce88dfc6ef6645a0dfbecc5138d068336d6e1c4fc75fd193d12.jpg',
            githubLink: 'https://github.com/Dara218/Bonsai-Clone',
            link: 'https://dara218.github.io/Bonsai-Clone/',
        },

        {
            id: 4,
            name: 'Soon',
            photo: 'https://picsum.photos/350/200/?random=4',
            githubLink: '',
            link: '',
        },

        {
            id: 5,
            name: 'Soon',
            photo: 'https://picsum.photos/350/200/?random=5',
            githubLink: '',
            link: '',
        }
    ]
    const projectWrapper = $('.project-wrapper')

    let eachProductsMap = projects.map(function(eachMap){
        return `<div class="project-item">
        <img src="${eachMap.photo}" alt="project 1">
        <div class="project-details">
            <div class="project-title">${eachMap.name}</div>
            <span>
            <a href="${eachMap.githubLink}" target="_blank" rel="noreferrer noopener"><i class="fa-brands fa-github"></i></a>
            <a href="${eachMap.link}" target="_blank" rel="noreferrer noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </span>
        </div>
    </div>`
    })

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

    const observer = new IntersectionObserver(function(entries){
        entries.forEach(function(eachEntry){
            if(eachEntry.isIntersecting){
                eachEntry.target.classList.add('show-element')
            }
            else{
                eachEntry.target.classList.remove('show-element')
            }
        })
    })

    const allHidden = document.querySelectorAll('.hidden')

    allHidden.forEach(function(el){
        observer.observe(el)
    })

    function loadProjects(){       
        projectsSlice1 = eachProductsMap.slice(0, 3)
        projectWrapper.html(projectsSlice1)
    }
 
    function loadMore(currentProjectCount){
        projectsSlice1 = eachProductsMap.slice(0, currentProjectCount)

        projectWrapper.html(projectsSlice1)
        console.log(currentProjectCount);
    }
})