(function ($, Drupal) {
    Drupal.behaviors.MapBehavior = {
        attach: function (context, settings) {
            $(document).ready(function(){
                //search location
                $(document).on('click', '#map_searcher', function (e) {
                    e.preventDefault();
                    searchlocation();
                });
                function searchlocation(){
                   console.log('Executing..');
                   $(".ajax-response").html('');
                   var address = $("input[name='field_event_location[0][value]']").val();
                   $.ajax({
                    url: "http://nominatim.openstreetmap.org/search",
                    type: 'GET',
                    data: {q:address,format:'json',polygon:'1','addressdetails':'1'},
                    dataType: 'json',
                    complete:function () { },
                    success:function (result) {
                        var newData = JSON.stringify(result)
                        var obj = JSON.parse(newData);
                        if (obj.length > 0) {
                            var longtitude = obj[0].lon;
                            var latitude = obj[0].lat;
                            $("input[name='field_event_longtitude[0][value]").val(longtitude)
                            $("input[name='field_event_latitude[0][value]").val(latitude)
                        }
                        else {
                            $(".ajax-response").html('Address Not found..');
                        }
                    },
                    error: function (error) {
                        $(".ajax-response").html(error);
                    }
                    });
                }
            });
        }
    };
})(jQuery, Drupal);