(function ($, Drupal) {
    Drupal.behaviors.ChartBehavior = {
        attach: function (context, settings) {
            $(document).ready(function(){
                //hide dataname column initially except column chart
                $('.field--name-field-graph-type  select').each(function() {
                    if($(this).val() =='column'){
                        $(this).parents('.field--type-list-string').siblings('div.field--name-field-data-names').show()

                    }
                    else{
                        $(this).parents('.field--type-list-string').siblings('div.field--name-field-data-names').hide()
                    }
                });
                
                $('.field--name-field-graph-type  select').on('change',function(e){
                    //show dataname column if chart type is column
                    if($(this).val() =='column'){
                       $(this).parents('.field--type-list-string').siblings('div.field--name-field-data-names').show()
                    }
                    else{
                        $(this).parents('.field--type-list-string').siblings('div.field--name-field-data-names').hide()
                    }
                });
            });
        }
    };
})(jQuery, Drupal);

    