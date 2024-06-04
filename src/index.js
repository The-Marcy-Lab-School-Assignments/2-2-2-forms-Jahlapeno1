/** GENERAL FEEDBACK:
 *
 */



const handleSubmit = (e) => {
  const form = e.target

  document.querySelector('#results-username').textContent = form.username.value
  document.querySelector('#results-coding-level').textContent = form.codingLevel.value
  document.querySelector('#results-location').textContent = form.location.value
  if (form.didLikeAssignment.checked) {
    document.querySelector('#results-did-like-assignment').textContent = "Yes"
  } else {
    document.querySelector('#results-did-like-assignment').textContent = "No"
  }

  form.reset()
  // console.log(e)
  e.preventDefault()
};

const main = () => {
  // console.log(document.querySelector('form'))
  document.querySelector('form').addEventListener('submit', handleSubmit)
}

main()