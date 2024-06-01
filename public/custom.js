document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        docsearch({
            appId: 'SQHZQLFJMP',
            apiKey: '4c28157f280bcebf4cd50e7a7cf0d4bd',
            indexName: 'pyaesoneaung',
            container: 'div#docSearch',
        });
    
        document.getElementById('searchIcon')
            .addEventListener('click', clickDocSearch);
    
        function clickDocSearch() {
            const button = document.getElementsByClassName('DocSearch-Button');
            button[0].click();
        }
    }
};