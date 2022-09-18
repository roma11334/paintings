const drops = () => {
    const fileInputs = document.querySelectorAll('[name="upload"]');

    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(drag => {
        fileInputs.forEach(input => {
            input.addEventListener(drag, preventDefaults);
        })
    })

    function preventDefaults(e){
        e.preventDefault();
        e.stopPropagation();
    }

    function highligts(input){
        input.closest('.file_upload').style.backgroundColor = 'rgba(0,0,0, 0.1)';
    }

    function unhighligts(input){
        input.closest('.file_upload').style.backgroundColor = '';
    };

    ['dragenter', 'dragover'].forEach(drag => {
        fileInputs.forEach(input => {
            input.addEventListener(drag, () => highligts(input));
        })
    });

    ['dragleave', 'drop'].forEach(drag => {
        fileInputs.forEach(input => {
            input.addEventListener(drag, () => unhighligts(input));
        })
    });

    fileInputs.forEach(input => {
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let arr = input.files[0].name.split('.');
            if(arr[0].length > 6){
                input.previousElementSibling.textContent = arr[0].substring(0,6) + '...' + arr[1];
            } else{
                input.previousElementSibling.textContent = item.files[0].name;
            }
        });
    })

}

export default drops;