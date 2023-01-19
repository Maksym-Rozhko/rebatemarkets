import GraphTabs from 'graph-tabs';
const tabsBrokersParent = document.querySelector('.brokers .tabs');

if (tabsBrokersParent) {
    new GraphTabs(tabsBrokersParent.dataset.tabs);
}
