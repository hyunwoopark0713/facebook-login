<h1>Facebook Login</h1>

Web page which allows to perform Facebook Login and to display friends list.

<h3>Resources</h3>
<ul>
<li>
Twitter Bootsrap 3.0.0
</li>

<li>
AngularJS 1.0.8
</li>

<li>
Facebook Javascript SDK
</li>

<li>
Jasmine 1.3.1
</li>

</ul>

<h3>Directory Structure</h3>
<ul>

<li>
<code>index.html</code> Login & Friends list display page.
</li>

<li>
<code>js/script.js</code> Application module. Contains two controllers:
<ol>
<li>
LoginCtrl - Check the user's status (connected or not) and display login modal if he's not connected.
</li>
<li>
FriendsCtrl - Get the user's friends list from Facebook API and render them into thumbnails.
</li>
</ol>
</li>
<li>
<code>test/spec/spec.js</code> Verify the controllers' ability to get the user's friends list and to display them later on.
</li>

</ul>

<h3>How To Install</h3>
Fork the project and run "index.html" (page) or "test/SpecRunner.html" (tests).
