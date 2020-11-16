const tabs = document.getElementsByClassName('tab');
const contents = document.getElementsByClassName('content');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', () => {
    for (let j = 0; j < contents.length; j++) {
      contents[j].className = 'content';

      contents[i].className = 'content active';
    }
  });
}
