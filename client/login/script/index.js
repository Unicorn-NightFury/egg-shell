/**
 * @description 登录注册页逻辑
 * @author Uni
 */


const handleChoose = () => {
    $(".choose-item").click(function() {
        $(".choose-item").removeClass('form-title-choose')
        $(".choose-item").addClass('item-unchoose')
        $(this).removeClass('item-unchoose')
        $(this).addClass('form-title-choose')
    })
}


const statusClean = () => {
    $('.input').val('')
    $('.input').removeClass('input-focus')
    $('.input').next().removeClass('input-span-focus')
}

const handleChooseAnimate = () => {
    $('#login-title').click(() => {
        $('.form-item').removeClass('form-item-transform')
        statusClean()
    })
    $('#sign-title').click(() => {
        $('.form-item').addClass('form-item-transform')
        statusClean()   
    })
}

const handleInputFocus = () => {
    $('.input').focus(function() {
        $(this).addClass('input-focus')
        $(this).next().addClass('input-span-focus')
    })
}

const handleInputBlur = () => {
    $('.input').blur(function() {
        const val = $(this).val()
        if (!val) {
            $(this).removeClass('input-focus')
            $(this).next().removeClass('input-span-focus')
        }
    })
}

const loginRequest = (username, password) => {
    $("#loading").show();
    setTimeout(() => {
        axios.post('/api/login', {
            username,
            password
        })
        .then(() => {
            $("#loading").hide()
        })
        .catch(() => {
            $("#loading").hide()
        })
    }, 3000)
}
const handleLogin = () => {
    let username,
        password
    $('.login-button').click(() => {
        username = $('.login-username').val()
        password = $('.login-password').val()
        if (username && password) {
            loginRequest(username, password)
        } else {
            $('.alert-box').addClass('show-alert')
            setTimeout(function() {
                $('.alert-box').removeClass('show-alert')
            }, 2000)
        }
    }) 

}



((window, document) => {
    window,onload = function() {
        $("#loading").hide()
    }
    handleChoose();
    handleChooseAnimate();
    handleInputFocus();
    handleInputBlur();
    handleLogin();
})(window, document)