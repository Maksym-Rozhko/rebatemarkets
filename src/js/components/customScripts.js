document.addEventListener('DOMContentLoaded', () => {
    const brokersNavigationBtn = document.querySelector('.broker .broker__nav-btn');

    if (brokersNavigationBtn) {
        brokersNavigationBtn.addEventListener('click', () => {
            brokersNavigationBtn.parentElement.classList.toggle('active');
        });

        const smoothScrollToElems = (links) => {
            const anchorsLink = document.querySelectorAll(links);

            if (anchorsLink) {
                const smoothScroll = (anchors) => {
                    for (let anchor of anchors) {
                        const blockID = anchor.getAttribute('href');

                        anchor.addEventListener('click', (e) => {
                            e.preventDefault();
                            brokersNavigationBtn.parentElement.classList.remove('active');
                            document.querySelector(blockID).scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });
                        });
                    };
                };

                smoothScroll(anchorsLink);
            }
        };

        smoothScrollToElems('.broker .broker__nav a');
    }
});
