// const $ = require('jquery')
import $ from 'jquery'

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback) {
    if(!loadHtmlSuccessCallbacks.includes(callback)) {
        loadHtmlSuccessCallbacks.push(callback)
    }
}

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

                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadIncludes(e)
            }
        })
    })
}

loadIncludes()