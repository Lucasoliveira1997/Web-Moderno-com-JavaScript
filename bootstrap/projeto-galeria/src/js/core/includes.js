// const $ = require('jquery')
import $ from 'jquery'

function loadIncludes(parent) {
    if(!parent) parent = 'body'

    $(parent).find('[wm-include]').each(function(i, e) {
        const elemento = $(e)
        const url = elemento.attr('wm-include')

        $.ajax({
            url,
            success(data) {
                elemento.html(data)
                elemento.removeAttr('wm-include')

                loadIncludes(e)
            }
        })
    })
}

loadIncludes()