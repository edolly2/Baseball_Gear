<div class="signin-modal-cont">
    <div class="signin-modal-title-cont">
        <h2>Sign-In</h2>
    </div>
    <form action="" class="sigin-form">
        <label for="signin-email">Email</label>
        <input type="email" name="signin-email" id="signin-email" placeholder="Example@email.com">
        <label for="signin-password">Password</label>
        <input type="password" name="signin-password" id="signin-password" placeholder="********">
        <div class="form-links-cont">
            <a href="#">Forgot password?</a>
            <a href="<?php echo url_for('/web_sections/account/index.php'); ?>">Not a member?</a>
        </div>
        <div class="form-btn-group-cont">
            <input type="submit" value="Submit">
            <input type="button" value="Cancel" id="signin-cancel">
        </div>
    </form>
</div>