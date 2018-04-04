// Element.closest polyfill
if (window.Element && !Element.prototype.closest) {
    Element.prototype.closest =
        function (s) {
            var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                i,
                el = this;
            do {
                i = matches.length;
                while (--i >= 0 && matches.item(i) !== el) {};
            } while ((i < 0) && (el = el.parentElement));
            return el;
        };
}

/*
 * Email Template From Original Form Handler
 * \\hubbabubba\e$\Inetpub\wwwroot\forms\subscribe2list.cfm
 * To: `mailserv@mercer.edu`
 * Subject: `<Subscribe|Unsubscribe> <listserv id>`
 * Body: `<Subscribe|Unsubscribe> <listserv id>`
 */
document.addEventListener('DOMContentLoaded', function () {
    // console.log('Ready!');

    var emailTo = 'mailserv@mercer.edu';
    var unSubScribeButtons = document.querySelectorAll('.un-sub-scribe');

    Array.prototype.forEach.call(unSubScribeButtons, function (link) {
        var div = link.closest('[data-list-id]');
        var listservId = div.getAttribute('data-list-id');
        var href = 'mailto:' + emailTo;
        var isSubscribe = !/unsub/.test(link.innerText);
        var command = '';

        if (isSubscribe) {
            command += 'Subscribe ';
        } else {
            command += 'Unsubscribe ';
        }

        command += listservId;

        href += '?subject=' + command + '&body=' + command;

        link.setAttribute('href', href);
    });

});