/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/
// Function that fades out an images, switches its src and fades it back in
// function switchImages( newImagePath ) {
//     var logo = $( "#logo" );
//
//     logo.fadeOut( 300, function() {
//         logo.attr( "src", newImagePath );
//         logo.fadeIn( 300 );
//     } );
// }
//
//
// // On document ready
// $( document ).ready( function() {
//     var $window = $( window ),
//         mainHeader = $( "#main-header" ),
//         defaultLogo = "images/logo.svg",
//         smallLogo = "images/logo-shrink.svg";
//
//     $window.scroll( function() {
//         if ( $window.scrollTop() > 100 ) {
//             if ( !mainHeader.hasClass( "shrink" ) ) {
//                 mainHeader.addClass( "shrink" );
//                 switchImages( smallLogo );
//             }
//         } else {
//             if ( mainHeader.hasClass( "shrink" ) ) {
//                 mainHeader.removeClass( "shrink" );
//                 switchImages( defaultLogo );
//             }
//         }
//     } );
// } );



/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/
var latestScrollPos = 0,
    tick = false,
    defaultLogo = "images/logo.svg",
    smallLogo = "images/logo-shrink.svg",
    mainHeader = document.getElementById( 'main-header' );

function onWindowScroll( scrollPos ) {
    if ( scrollPos > 100 ) {
        if ( !mainHeader.classList.contains( "shrink" ) ) {
            mainHeader.classList.add( 'shrink' );
            switchImages( smallLogo );
        }
    } else {
        if ( mainHeader.classList.contains( "shrink" ) ) {
            mainHeader.classList.remove( 'shrink' );
            switchImages( defaultLogo );
        }
    }
}

// Function that fades out an image, switches its src and fades it back in
function switchImages( newImagePath ) {
    var logo = document.getElementById( 'logo' );

    logo.classList.add( "js-fade-out" );
    setTimeout( function(){
        logo.classList.add( "paused" );
        logo.src = newImagePath;
        logo.classList.remove( "js-fade-out" );
        logo.classList.add( "js-fade-in", "running" );
    }, 300 );
}

// Add event listener for window scroll
window.addEventListener( 'scroll', function( e ) {
    latestScrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    if ( !tick ) {
        window.requestAnimationFrame( function() {
            onWindowScroll( latestScrollPos );
            tick = false;
        } );
    }

    tick = true;
} );
