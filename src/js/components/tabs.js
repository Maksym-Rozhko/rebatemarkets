import GraphTabs from 'graph-tabs';
const tabs = document.querySelector('.tabs');

if (tabs) {
    new GraphTabs(tabs.dataset.tabs);
}
