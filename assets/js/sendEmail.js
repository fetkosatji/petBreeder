function sendEmail() {
    Email.send({
        SecureToken : '0d94a032-e249-4350-8bc1-9ae89040de10',
        To : 'fetriankosatriohaji02@gmail.com',
        From : 'test.gmail.com',
        Subject : document.querySelector("#subject").value,
        Body : document.querySelector("#message").value
    }).then(
      message => alert(message)
    );
}