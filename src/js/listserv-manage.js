/**
 * @author Todd Sayre
 *
 * Email Template From Original Form Handler
 *
 * \\hubbabubba\e$\Inetpub\wwwroot\forms\subscribe2list.cfm
 *
 * To: `mailserv@mercer.edu`
 * Subject: `<Subscribe|Unsubscribe> <listserv id>`
 * Body: `<Subscribe|Unsubscribe> <listserv id>`
 *
 */

require('element-closest');
require('nodelist-foreach');

document.addEventListener('DOMContentLoaded', function () {

    let toAddress = 'mailserv@mercer.edu';
    let actionButtons = document.querySelectorAll('.listserv-control__action');

    actionButtons.forEach(link => {
        let listservContainer = link.closest('[data-list-id]');
        let listservId = listservContainer.getAttribute('data-list-id');
        let isSubscribe = ! /unsubscribe/.test(link.className);
        let command = 'Subscribe';

        if (! isSubscribe) {
            command = 'Unsubscribe';
        }

        let body = `${command} ${listservId}`;

        let hrefValue = `mailto:${toAddress}?subject=${body}&body=${body}`;
        hrefValue = hrefValue.replace(' ', '%20');

        link.setAttribute('href', hrefValue);
    });

});
