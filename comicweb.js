function applyComicSans() {
    document.querySelectorAll('*').forEach(element => {
        const computedFont = window.getComputedStyle(element).fontFamily.toLowerCase();

        //excludes known icon fonts, monospace, and math shit
        const isIconFont = computedFont.includes('awesome') || computedFont.includes('material') || computedFont.includes('icon');
        const isMonospace = computedFont.includes('monospace');
        const isMath = ['math', 'mtext', 'msup', 'msub', 'mrow', 'mi', 'mo'].includes(element.tagName.toLowerCase());

        if (!isIconFont && !isMonospace && !isMath) {
            element.style.fontFamily = `"Comic Sans MS", sans-serif`;
        }
    });
}

applyComicSans();

typeof MutationObserver !== 'undefined' && new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) { 
                const computedFont = window.getComputedStyle(node).fontFamily.toLowerCase();
                const isIconFont = computedFont.includes('awesome') || computedFont.includes('material') || computedFont.includes('icon');
                const isMonospace = computedFont.includes('monospace');
                const isMath = ['math', 'mtext', 'msup', 'msub', 'mrow', 'mi', 'mo'].includes(node.tagName.toLowerCase());

                if (!isIconFont && !isMonospace && !isMath) {
                    node.style.fontFamily = `"Comic Sans MS", sans-serif`;
                }

                node.querySelectorAll('*').forEach(child => {
                    const childFont = window.getComputedStyle(child).fontFamily.toLowerCase();
                    const isChildIcon = childFont.includes('awesome') || childFont.includes('material') || childFont.includes('icon');
                    const isChildMonospace = childFont.includes('monospace');
                    const isChildMath = ['math', 'mtext', 'msup', 'msub', 'mrow', 'mi', 'mo'].includes(child.tagName.toLowerCase());

                    if (!isChildIcon && !isChildMonospace && !isChildMath) {
                        child.style.fontFamily = `"Comic Sans MS", sans-serif`;
                    }
                });
            }
        });
    });
}).observe(document.body, { childList: true, subtree: true });
