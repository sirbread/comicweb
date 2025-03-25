function applyComicSans() {
    document.querySelectorAll('*').forEach(element => {
        element.style.fontFamily = "Comic Sans MS, sans-serif";
    });
}

applyComicSans();

typeof MutationObserver !== 'undefined' && new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { 
                node.style.fontFamily = "Comic Sans MS, sans-serif";
                node.querySelectorAll('*').forEach(child => {
                    child.style.fontFamily = "Comic Sans MS, sans-serif";
                });
            }
        });
    });
}).observe(document.body, { childList: true, subtree: true });
