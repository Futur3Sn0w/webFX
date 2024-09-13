// NavDial Buttons

$(window).on('load', function () {
    setupBackground();
    createButtons();
    $('#darkSupport, #mobileSupport, #responsive, #interactive').css('background-color', "var(--green)");

    setTimeout(() => {
        $('#pageBtn1').click();
    }, 200);
})

function createWindow(btnIndex, btnId) {
    $('.window').removeClass('focus');
    let $pageWindow = $(`
        <div class="window" id="windowPage${btnIndex}" caller-id="#${btnId}" page-id="page${btnIndex}" style="opacity: 0; transform: scale(0.95);">
            <div class="tb">
                <div class="rb"></div>
                <div class="controls">
                    <div class="minimize">-</div>
                    <div class="maximize">□</div>
                    <div class="close">×</div>
                </div>
            </div>
            <embed class="page1i" src="subpages/page${btnIndex}.html" frameborder="0" id="iViewport" allow="autoplay; fullscreen"></embed>
        </div>
    `);

    $('body').append($pageWindow);

    // Center the window
    const windowWidth = $pageWindow.outerWidth();
    const windowHeight = $pageWindow.outerHeight();
    const viewportWidth = $(window).width();
    const viewportHeight = $(window).height();

    const leftPosition = (viewportWidth - windowWidth) / 2;
    const topPosition = (viewportHeight - windowHeight) / 2;

    $pageWindow.css({
        left: `${leftPosition}px`,
        top: `${topPosition}px`
    });

    // Fade and scale in the window
    $pageWindow.animate({
        opacity: 1
    }, {
        duration: 300,
        step: function (now, fx) {
            if (fx.prop === "opacity") {
                const scaleValue = 0.95 + (now * 0.05); // Scale from 0.95 to 1
                $pageWindow.css('transform', `scale(${scaleValue})`);
            }
        }
    });

    setTimeout(() => {
        $(".window").draggable({
            distance: 5,
            scroll: false,
            handle: ".tb",
            cancel: ".controls",
            containment: "parent",
            start: function (e) {
                $(this).removeClass('maximize');
                focusWindow(e.currentTarget);
                $('#iViewport').addClass('freeze')
            },
            drag: function (e, ui) {
                checkWindowPosition(ui.helper);
            },
            stop: function (e) {
                $('#iViewport').removeClass('freeze')
            }
        }).resizable({
            distance: 10,
            ghost: true,
            handles: "n, e, s, w, ne, se, sw, nw"
        });
    }, 300)

    function checkWindowPosition($window) {
        var windowBottom = $window.offset().top + $window.outerHeight();
        var pageBottom = $(window).height() + $(window).scrollTop();

        if ((pageBottom - windowBottom) <= 45) {
            // Add class when within 50px of the page bottom
            $(".navDial").addClass("near-bottom");
        } else {
            // Remove class if more than 50px from the bottom
            $(".navDial").removeClass("near-bottom");
        }
    }

    $(document).prop('title', "WebFX | " + $('.pnBtn[focus="y"]').attr('data-pageName'));
    setTimeout(() => {
        $pageWindow.children('.tb').click();
    }, 100);
}

function focusWindow(currentTarget) {
    let $target = $(currentTarget);
    let $pid = $target.attr("page-id");
    let $cid = $target.attr("caller-id");

    if (!$target.hasClass('focus')) {
        $(`.window[caller-id='#${$cid}']`).addClass("focus");
    }

    $(`.pnBtn:not(${$cid})`).attr('focus', 'n');
    if (!$($cid).attr("focus", 'y')) {
        $($cid).attr("focus", 'y');
    }

    setupStats();
    $(document).prop('title', "WebFX | " + $('.pnBtn[focus="y"]').attr('data-pageName'));
    $(':root').css('--page-bg', $('.pnBtn[focus="y"] i').css('background-color'));
}

function closeWindow(e) {
    let $target = $(e.target).closest('.window'); // Get the window element
    let $pid = $target.attr("page-id");
    let $cid = $target.attr("caller-id");

    $('.launcher .pnBtn' + $cid).attr('windowopen', 'n')

    // Ensure transform starts at scale(1) to prevent any initial reset issues
    $target.css('transform', 'scale(1)');

    // Animate the fade-out and scale-down effect
    $target.animate({
        opacity: 0
    }, {
        duration: 150,
        step: function (now, fx) {
            if (fx.prop === "opacity") {
                const scaleValue = 1 - (1 - now) * 0.05; // Smoothly scale from 1 to 0.95
                $target.css('transform', `scale(${scaleValue})`);
            }
        },
        complete: function () {
            // After the animation completes, remove the window from the DOM
            $target.remove();
            $(`.navDial ${$cid}`).remove();
            setTimeout(() => {
                $('body').click();
            }, 200);
        }
    });
}

$(document).on('dblclick', '.tb', function () {
    $(this).parent().toggleClass('maximize');
})

$(document).on('click', function (e) {
    const $target = $(e.target);

    // Handle '.window' click
    if ($target.closest('.window').length) {
        // Update focus state for windows
        $('.window').removeClass('focus');
        $target.closest('.window').addClass('focus');
        focusWindow($target.closest('.window')[0]);

        // Note: Do not return here, allow other event handlers to process
    }

    // Handle '.tb .close' click
    if ($target.hasClass('close') && $target.closest('.tb').length) {
        closeWindow(e);
        // No need to return, allow other handlers to process
    }

    // Handle '.tb .maximize' click
    if ($target.hasClass('maximize') && $target.closest('.tb').length) {
        $target.closest('.window').toggleClass('maximize');
        // No need to return, allow other handlers to process
    }

    // Hide launcher and showApps if clicked outside
    if (!$target.hasClass('launcher') && !$target.hasClass('showApps')) {
        $('.launcher').removeClass('visible');
        $('.showApps').removeClass('visible');
    }

    // Manage focus logic (skip focus change if .statusCenterBtn is clicked)
    if (!$target.closest('.window').hasClass('focus')) {
        if ($target.hasClass('statusCenterBtn')) return;  // Skip focus logic if '.statusCenterBtn' is clicked

        let $cid = $target.closest('.window').attr('id');

        // Check if the clicked element is a '.pnBtn' and focus the associated window
        if ($target.hasClass('pnBtn')) {
            let targetWindowId = $target.attr('window-id');  // Assuming the button has a data attribute for the window ID
            $cid = targetWindowId;

            if ($cid) {
                $(`#${$cid}`).addClass('focus');
            }
        } else {
            $(`.window`).removeClass('focus');
        }

        // Update the UI elements and page styling
        $('#scBtn').text('WebFX');
        $('#sctTitle').text('WebFX');
        $(document).prop('title', "WebFX");
        $(':root').css('--page-bg', 'var(--page-bg-a)');

        // Update focus status for buttons
        $('.pnBtn').attr('focus', 'n');
        if ($target.hasClass('pnBtn')) {
            $target.attr('focus', 'y');
        }

        // Optionally update your stats
        setupStats();
    }

    // Hide statusCenter if clicked outside
    if (!$target.hasClass('statusCenter') && !$target.hasClass('scBtn')) {
        $('#statusCenter').removeClass('visible');
    }

    // Hide notesBox if clicked outside
    if (!$target.hasClass('notesBox') && !$target.hasClass('notesBtn')) {
        $('.notesBox').removeClass('visible');
    }

    // Handle '.pnBtn' click
    if ($target.hasClass('pnBtn')) {
        let id = $target.attr('id');
        $target.attr('focus', 'y');
        $target.attr('windowOpen', 'y');

        let entrypoint = $target.parent().parent().hasClass('launcher') ? 'launcher' : 'tb';
        let btnIndex = $target.index() + 1;
        let pageId = "page" + btnIndex;
        let existingWindow = $('.window[page-id="' + pageId + '"]');

        if (entrypoint === 'launcher') {
            if ($(`.navDial .pnBtn#${id}`).length <= 0) {
                $target.clone().appendTo('.navDial .buttonGroup');
            }

            if (existingWindow.length > 0) {
                $('.showApps').removeClass('visible');
                $('.launcher').removeClass('visible');
                $('.window').removeClass('focus');
                $(`.window[caller-id='#${id}']`).addClass("focus");
                focusWindow($target[0]);
            } else {
                createWindow(btnIndex, id);
            }
        } else {
            setTimeout(() => {
                $(`.window[caller-id='#${id}']`).click();
            }, 25);
        }

        $(':root').css('--page-bg', $target.find('i').css('background-color'));
        setupStats();
    }
});

function createButtons() {
    $.getJSON('directory.json', function (data) {
        // Loop through each entry in the JSON array
        $.each(data, function (index, item) {
            // Calculate the delay for each button
            const delay = index * 0.05; // Increase by 0.05s for each successive button

            // Create the button element
            const button = $('<div></div>')
                .addClass('pnBtn pnbtn' + (index + 1) + ' ' +
                    'dm' + getInitial(item.specs.darkMode) + ' ' +
                    'ms' + getInitial(item.specs.mobileSupport) + ' ' +
                    're' + getInitial(item.specs.responsive) + ' ' +
                    'in' + getInitial(item.specs.interactive))
                .attr('id', item.id)
                .attr('window-id', 'windowPage' + (index + 1))
                .attr('data-pageName', item.pageName)
                .attr('focus', 'y')
                .attr('data-needsBlur', item.needsBlur ? 'y' : 'n')
                .css('animation-delay', delay + 's'); // Set the animation delay

            // Create the icon element
            const icon = $('<i></i>')
                .addClass(item.iconClass)
                .css('background-color', item.iconBackgroundColor);

            // Append the icon to the button
            button.append(icon);

            // Append the button to the container in your HTML
            $('.launcher .buttonGroup').append(button);
        });
    });

    // Function to get the initial character based on color
    function getInitial(color) {
        switch (color) {
            case 'green': return 'G';
            case 'yellow': return 'Y';
            case 'red': return 'R';
            default: return '';
        }
    }
};

function setupStats() {
    if ($('.pnBtn[focus="y"]').length > 0) {
        // If focus="y" exists
        $('#scBtn').text($('.pnBtn[focus="y"]').attr('data-pageName') || 'WebFX');
        $('#sctTitle').text($('.pnBtn[focus="y"]').attr('data-pageName') || 'WebFX');
        $(':root').css('--page-bg', $('.pnBtn[focus="y"] i').css('background-color'));

        if ($('.pnBtn[focus="y"]').attr("data-needsBlur") == "y") {
            $('#scBlurberry').addClass('visible')
        } else {
            $('#scBlurberry').removeClass('visible')
        }

        if ($('.pnBtn[focus="y"]').hasClass("dmG")) {
            $('#darkSupport').css('background-color', "var(--green)");
        } else if ($('.pnBtn[focus="y"]').hasClass("dmY")) {
            $('#darkSupport').css('background-color', "var(--yellow)");
        } else if ($('.pnBtn[focus="y"]').hasClass("dmR")) {
            $('#darkSupport').css('background-color', "var(--red)");
        }

        if ($('.pnBtn[focus="y"]').hasClass("inG")) {
            $('#interactive').css('background-color', "var(--green)");
        } else if ($('.pnBtn[focus="y"]').hasClass("inY")) {
            $('#interactive').css('background-color', "var(--yellow)");
        } else if ($('.pnBtn[focus="y"]').hasClass("inR")) {
            $('#interactive').css('background-color', "var(--red)");
        }

        if ($('.pnBtn[focus="y"]').hasClass("msG")) {
            $('#mobileSupport').css('background-color', "var(--green)");
        } else if ($('.pnBtn[focus="y"]').hasClass("msY")) {
            $('#mobileSupport').css('background-color', "var(--yellow)");
        } else if ($('.pnBtn[focus="y"]').hasClass("msR")) {
            $('#mobileSupport').css('background-color', "var(--red)");
        }

        if ($('.pnBtn[focus="y"]').hasClass("reG")) {
            $('#responsive').css('background-color', "var(--green)");
        } else if ($('.pnBtn[focus="y"]').hasClass("reY")) {
            $('#responsive').css('background-color', "var(--yellow)");
        } else if ($('.pnBtn[focus="y"]').hasClass("reR")) {
            $('#responsive').css('background-color', "var(--red)");
        }
    } else {
        // Fallback if neither "y" nor "n" is found
        $('#scBtn').text('WebFX');
        $('#sctTitle').text('WebFX');
        $(':root').css('--page-bg', $('.pnBtn[focus="y"] i').css('background-color'));

        $('#darkSupport').css('background-color', "var(--green)");
        $('#interactive').css('background-color', "var(--green)");
        $('#mobileSupport').css('background-color', "var(--green)");
        $('#responsive').css('background-color', "var(--green)");
        $('#scBlurberry').removeClass('visible')
    }
}

// z97ftfEScF5EGKHCQHd49Jq8eP42g0ESbqg6FZTy5axaHe8gLAjd0OzM

function setupBackground() {
    // Function to set background image
    function setBackground(imageUrl) {
        $('body').css('background-image', `url(${imageUrl})`);
    }

    // Check if the image and timestamp are already in localStorage
    const storedImage = localStorage.getItem('backgroundImage');
    const storedDate = localStorage.getItem('backgroundImageDate');

    // Helper function to check if 24 hours have passed
    function has24HoursPassed(savedDate) {
        const currentTime = new Date().getTime();
        const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        return (currentTime - savedDate) >= oneDayInMilliseconds;
    }

    // If both image and timestamp exist in localStorage
    if (storedImage && storedDate) {
        const savedDate = parseInt(storedDate, 10);

        // If less than 24 hours have passed, use the stored image
        if (!has24HoursPassed(savedDate)) {
            console.log('Background image exists and is still valid - setting...');
            setBackground(storedImage);
            return; // Exit function, no need to fetch a new image
        } else {
            console.log('Background image expired - fetching a new image...');
        }
    } else {
        console.log('No background image saved - fetching a new image...');
    }

    // If 24 hours have passed or no image exists, fetch a new image
    const API_KEY = 'z97ftfEScF5EGKHCQHd49Jq8eP42g0ESbqg6FZTy5axaHe8gLAjd0OzM';

    // API request for a unique minimal landscape image (using page parameter for variety)
    const randomPage = Math.floor(Math.random() * 100) + 1; // Randomize the page to get a unique image

    $.ajax({
        url: 'https://api.pexels.com/v1/search',
        type: 'GET',
        data: {
            query: 'minimal landscape',
            per_page: 1, // Limit to 1 result
            orientation: 'landscape',
            page: randomPage // Random page for different image
        },
        headers: {
            Authorization: API_KEY
        },
        success: function (response) {
            if (response.photos && response.photos.length > 0) {
                const imageUrl = response.photos[0].src.large; // Use the large image size

                // Save the new image URL and current date to localStorage
                const currentDate = new Date().getTime();
                localStorage.setItem('backgroundImage', imageUrl);
                localStorage.setItem('backgroundImageDate', currentDate.toString());

                // Set the new background image
                setBackground(imageUrl);
            }
        },
        error: function (error) {
            console.log('Error fetching image:', error);
        }
    });
}

$('.showApps').on('click', () => {
    $('.showApps').toggleClass('visible');
    $('.launcher').toggleClass('visible');
    $('.window').removeClass('focus')
})

$('#scBtn').on('click', function () {
    $('#statusCenter').toggleClass('visible')
});

$('.notesBtn').on('click', () => {
    $('.notesBox').toggleClass('visible');
    $('.window').removeClass('focus')
})