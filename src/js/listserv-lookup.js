/**
 * @author Todd Sayre
 *
 * Example Body
 * ```
 * DIR/LIST BIO101*
 * ```
 */

document.addEventListener('DOMContentLoaded', () => {
  let courseField = document.getElementById('course');
  let emailButton = document.getElementById('email');

  let mailTo = emailButton.getAttribute('href');

  courseField.addEventListener('keyup', () => {
    let course = courseField.value;
    let body = `DIR/LIST ${course}*`;
    let newMailTo = `${mailTo}?subject=${body}&body=${body}`;

    // Mailto protocol links break normal URI encoding rules
    newMailTo = newMailTo.replace(' ', '%20');

    // console.log(newMailTo);

    emailButton.setAttribute('href', newMailTo);
  });

  emailButton.addEventListener('click', () => {
    courseField.value = '';
  });
});
