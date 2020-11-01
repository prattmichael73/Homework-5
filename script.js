$(document).ready(function () {
    var currentHour = moment().hour()
    var timeBlocks = $(".time-block")
    for (var i = 0; i < timeBlocks.length; i++) {
        var timeBlock = (timeBlocks[i])
        var timeBlockkId = timeBlock.children[0].id;
        var hour = parseInt(timeBlockkId.split('-')[1]
        if (hour < currentHour) {
            console.log(timeBlock.addClass)
            console.log('add .past class')
        } else if (hour === currentHour) {
            console.log('add .present class')
        } else {
            console.log('add .future class')
        }
    }
    $(timeBlocks).each(function () {
        var timeBlock = $(this);
        var timeblock

    })
});
