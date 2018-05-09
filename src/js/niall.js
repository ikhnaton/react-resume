var nodeStore = null;

//function launch(event)
//{
//    var val = $(event.target).attr("ntarget");
//    if (val == null)
//    {
//        val = $(event.target).parent().attr("ntarget");
//    }
//    if (val != null)
//    {
//        console.log(val);
//        window.open(val);
//    }
//}

$('document').ready(function(e) {

    //added to deal with iOS not supporting fixed background
//    if (!navigator.userAgent.match(/iPod|iPhone|iPad/))
//    {
//        $('section#page-header').css('background-attachment','fixed')
//    }
//
//    var toggle = false;
//    $('li').on('click', launch);
//    $('li img').on('click', launch);
//    $('li span').on('click', launch);
//
//    $('#menu').on('click', function() {
//        $('nav').toggleClass('nav_closed').toggleClass('nav_open');
//        toggle = !toggle;
//        if (!toggle)
//        {
//            var tmp = $('nav ul#navlist');
//            var newone = tmp.clone(true);
//            tmp.before(newone);
//            tmp.remove();
//        }
//
//    });
//
//    $('nav ul#navlist li a').on('click', function() {
//        $('nav').toggleClass('nav_closed').toggleClass('nav_open');
//        toggle = !toggle;
//    })




});

function setContact()
{
    var too = "to";
    var mom = "ma";
    var ref = mom + 'il' + too;

    var user = "ikhnaton";
    var host = "chie.c";

    var display = user + "@te" + host + "om";
    var tot = ref + ":" + display;

    $('#reach').html(display);
    $('#reach').attr('href', tot);
}

function equalizeWhenImagesComplete()
{
    var objects = $('img');
    for (var x in objects)
    {
        if (objects[x].complete == false)
        {
            setTimeout(equalizeWhenImagesComplete, 50);
            return;
        }
    }

    equalizeHeights('.niall-portfolio', 3);
    nodeStore = $('section#portfolio div article ul').clone(true);
    {
        var tmp = $('nav ul#navlist');
        var newone = tmp.clone(true);
        tmp.before(newone);
        tmp.remove();
    }
    enableLightbox2();
}

function restoreNode()
{
    var old = $('section#portfolio div article ul');
    old.before(nodeStore.clone(true));
    old.remove();

    $('#lightbox').remove();
    $('#lightboxOverlay').remove();
}

function enableFluidbox()
{
    restoreNode();

    $('.niall-portfolio a').fluidbox({
        viewportFill: 0.5,
        loader: true
    });

    $('section#portfolio article#lightboxControls h3').html('Click images to view using Fluidbox');
}

function enableLightbox2()
{
    restoreNode();

    lightbox.option({ "wrapAround": true});
    lightbox.init();

    $('section#portfolio article#lightboxControls h3').html('Click images to view using Lightbox2');
}

function equalizeHeights(cssStyle, groupSize)
{
    var objects = $(cssStyle);
    var outerLoops = Math.ceil(objects.length / groupSize);

    for (var x = 0; x < outerLoops; x++)
    {
        var height = 0;

        for (var y = 0; y < groupSize; y++)
        {
            var ref = x * groupSize + y;
            if (parseInt($(objects[ref]).css('height')) > height) { height = parseInt($(objects[ref]).css('height')); }
        }

        for (var y = 0; y < groupSize; y++)
        {
            $(objects[x * groupSize + y]).css('height', height + 'px');
        }
    }

}
