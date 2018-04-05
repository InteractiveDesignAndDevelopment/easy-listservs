/**
 * @author Todd Sayre
 *
 * Example Body
 * ```
 * DIR/LIST BIO101*
 * ```
 */

document.addEventListener('DOMContentLoaded', function() {
  let courseField = document.getElementById('course');
  let emailButton = document.getElementById('email');

  let mailTo = emailButton.getAttribute('href');

  courseField.addEventListener('keypress', function() {
    let course = courseField.value;
    let body = `DIR/LIST ${course}*`;
    let subject = body;
    let newMailTo = `${mailTo}?body=${body}`;

    // Mailto protocol links break normal URI encoding rules
    newMailTo = newMailTo.replace(' ', '%20');

    courseField.setAttribute('href', newMailTo);
  });
});