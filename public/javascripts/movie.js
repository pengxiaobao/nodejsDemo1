$(function() {
    // var mdata = {};
    // var url = '/javascripts/movie.json';
    // 从/movie/json/xxx处取数据
    var mdata={};
    var url = '/javascripts/movie.json';
    var movie=$('#c_editor').attr('movie')
    if(movie){
       url = '/movie/query/'+movie;
    }
    $.getJSON(url, function(data) {
        mdata = data;
        delete mdata._id;
        delete mdata.__v;
        render_editor_form(mdata);
        render_event_form(mdata);
    });
    var render_editor_form = function(data) {
        $('#c_editor').val($.toJSON(data));
    };
    var render_event_form = function() {
        $('#c_save').on('click', function(event) {
              var params = {};
              var mdata = $("#c_editor").val();

               params['content'] = JSON.parse(mdata);
               var bodyString = JSON.stringify(params);
               var url = '/movie/doadd';
               // movie  exist 
               if(movie){
                     url = '/movie/doEditMovie/' + movie;
               }
            $.ajax({
                type: "POST",
                url:  url,
                data: bodyString,
                contentType: "application/json;charset=utf-8",
                success: function(data, textStatus) {
                    if (data.success) {
                        $('#msg').html('成功保存!');
                        $('#msg').addClass('alert alert-success');
                        $(location).attr('href', '/movie/' + params['content'].name);
                    } else {
                        $('#msg').html(data.err);
                        $('#msg').addClass('alert alert-error');
                    }
                }
            });
        });
    };
});


