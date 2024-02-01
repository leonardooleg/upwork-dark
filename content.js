var html_style_night = `
 body{
background-color: #000000!important;
}
.nav-v2 {
    background-color: #040b0e!important;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #63b7dd!important;
} 
.up-sidebar {
    background-color: #040b0e!important;
color: #ffffff!important;
}

.up-card-section:not(:last-child):not(.p-0) {
    border-bottom: 1px solid #143442!important;
}
.dark-theme  .up-card-footer, .up-card-header {
    background-color: #000!important;
}
.up-card {
color: #fffff0!important;
   background-color: #000000!important;
border: 1px solid #040b0e!important;
}
.up-slider-content {
    background: #000000!important;
}
.up-slider-header {
    background: #0e2933!important;
}
.up-card-visited {
    background-color: #080808!important;
}
html[theme=air-2-75-user] .up-footer {
    --footer-color: #bdbdbd!important;
    --footer-bg: #000!important;
}
.up-btn.up-dropdown-toggle:not(.up-btn-circle):not([disabled]) {
color: #fffff0!important;
    background-color: #000!important;
}
.up-input {
    background-color: #000!important;
}
.up-image-upload {
    background: #000000!important;
    color: #ffffff!important;
}
.up-footer-social .up-footer-social-list-link {
    color: var(--footer-color);
    background: #000000!important;
}
.up-skill-badge {
    color: #ffffff!important;
    background-color: #1d4354!important;
}
.up-alert:not(.up-alert-notification) {
    background-color: #040b0e!important;
    color: #ffffff!important;
}
.announcements-empty {
    background-color: #000!important;
}
.up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
    background-color: #1d4354!important;
}

@media (hover: hover){
.up-card-section.up-card-hover:focus-within, .up-card-section.up-card-hover:hover {
    background-color: #040b0e!important;
}
@media (min-width: 992px){
.nav-v2 .search-wrapper .nav-search-autosuggest-input.is-open, .nav-v2 .search-wrapper .nav-search-autosuggest-input:focus, .nav-v2 .search-wrapper .nav-search-switch-btn.is-open, .nav-v2 .search-wrapper .nav-search-switch-btn:focus {
     background-color: #040b0e!important;
    border-color: #040b0e;
    box-shadow: #040b0e;
    color: #fff;
 }


/******************************/
#toggle{
    -webkit-appearance: none;
    appearance: none;
    height: 40px;
    width: 75px;
    background-color: #15181f;
    position: absolute;
  
    border-radius: 20px;
    outline: none;
    cursor: pointer;
}
#toggle:after{
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    top: 5px;
    left: 7px;
    border-radius: 50%;
}
.dark-theme #toggle{
    background-color: #ffffff;
}
.dark-theme #toggle:after{
    background-color: transparent;
    box-shadow: 10px 10px #15181f;
    top: -4px;
    left: 30px;
}
.up-card-section{
    background-color: #000000!important;
}
.up-step.profile-completeness-nudge-tile {
    background-color: #000;
}

.dark-theme  .announcement-with-illustration{
    background-color: #000;
}
.dark-theme  .announcement-with-illustration .content-block h1,p{
    color: #fff;
}
.dark-theme  .announcements .announcement-with-illustration{
    background-color: #000!important;
    color: #63b7dd!important;
}
.dark-theme .up-tab-scroll-hint:after{
    background: unset!important;
}
.dark-theme .up-btn-default {
    background-color: #000000;
}
.dark-theme  .up-skill-container .up-btn.up-btn-next:before {
    background: unset!important;
}
.dark-theme .up-badge:not(.up-badge-tagline):not(.up-badge-flag).up-badge-rounded-inverse {
    background: #000;
}
.dark-theme  #fwh-sidebar-profile .profile-title, #fwh-sidebar-profile .profile-title {
    color: var(--link-hover-color);
}
.dark-theme  .up-tab-btn, .up-tab-btn {
    color: var(--tab-hover-color);
}
.dark-theme .up-btn-default {
    background-color: #091216;
}
body.dark-theme {
    color: #fff;
}
.dark-theme .up-dropdown {
    color: #000;
}
.dark-theme .up-dropdown-menu {
    background-color: #000;
}
.dark-theme .up-menu-list .up-menu-item {
    background-color: #000;
    color: #fff;
}
.dark-theme .up-group-header {
    background-color: #000000;
}
.dark-theme  .up-menu-list .up-menu-item.focused-menu {
    color: #fff;
}
.dark-theme .up-menu-list li.up-dropdown-menu-header {
    background-color: #000000;
}
.dark-theme .up-menu-list .up-menu-item:hover {
    color: #009ed6;
}
.dark-theme textarea.up-textarea {
    background-color: #000;
}
.dark-theme .up-modal-header {
    background-color: #000;
}
.dark-theme .up-modal-footer {
    background-color: #000;
}
.dark-theme .up-modal-content.up-modal-desktop-container {
    background-color: #000;
}
.dark-theme .up-modal-body {
    background-color: #000;
}
.dark-theme .up-checkbox:focus-within, .up-checkbox:hover, .up-radio:focus-within, .up-radio:hover {
     background-color: #040b0e!important;
    color: #fff;
}
.dark-theme .up-datepicker-calendar {
    background: #000;
}
.dark-theme .up-datepicker-table .up-datepicker-table-btn:not(.up-datepicker-selected):focus, .up-datepicker-table .up-datepicker-table-btn:not(.up-datepicker-selected):hover {
    background: #63b7dd;
}
.dark-theme .fe-proposal-job-estimated-duration .up-dropdown {
    color: #fff!important;
}
.dark-theme .up-d-empty-state {
    background-color: #000;
}
.dark-theme .room-list-header {
    background-color: #000;
}
.dark-theme .up-d-room-list {
    background-color: #000;
}
.dark-theme .up-d-room-list-item.nuxt-link-active, .up-d-room-list-item:not(.skeleton):hover {
    background-color: #222222!important;
}
.dark-theme #layout-index .menu-open {
    background-color: #222222!important;
}
.dark-theme #layout-index .popper>div .popper-inner {
    background-color: #000!important;
}
.dark-theme #layout-room .popper>div .popper-inner {
    background-color: #000!important;
}
.dark-theme #layout-room .menu-open {
    background-color: #000000;
}
.dark-theme #layout-room section {
    background-color: #000!important;
}
.dark-theme #layout-index .scroll-wrapper {
    background-color: #000!important;
}
.dark-theme #layout-index .up-group-header {
    color: #30a3dd;
}
.dark-theme #layout-index .room-list-header {
    background-color: #000;
    color: #fff;
}
.dark-theme #layout-index .up-modal .up-modal-body {
   background-color: #000;
    color: #fff;
}
.dark-theme #layout-index .up-icon>svg {
    color: #fff;
}
.dark-theme #layout-index  .up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
    background-color: #000!important;
    color: #fff;
}
.dark-theme #layout-index .up-d-rooms-section {
    color: #fff;
}
.dark-theme #layout-room .up-d-room-header {
    background-color: #000;
}
.dark-theme #layout-room  .up-d-room-actions {
    background-color: #000;
}
.dark-theme #layout-room .story-day-header {
    background: #000;
}
.dark-theme #layout-room .story-day-header span {
    background: #222;
    color: #fff;
}
.dark-theme #layout-room  .up-d-story:not(.skeleton):hover {
    background-color: #222222;
}
.dark-theme #layout-room .up-d-story-template-ref {
    background-color: #121212;
}
.dark-theme #layout-room .favorite-menu, .dark-theme #layout-room .story-menu {
    background: #222;
}
.dark-theme #layout-index .favorite-menu, .dark-theme #layout-index .story-menu {
    background: #222;
}
.dark-theme #layout-index .room-list-menu {
    background: #000;
}
.dark-theme #layout-room .up-d-composer {
    background-color: #000;
}
.dark-theme #layout-room  .story-message-header {
    color: #3594dd;
}
.dark-theme #layout-room .up-d-sidebar {
    background-color: #000;
}
.dark-theme #layout-room .attachment-sections {
    background-color: #000;
}
.dark-theme #layout-room .story-user-name {
    color: #3594dd;
}
.dark-theme #layout-room .file-name-wrapper .file-name {
    color: #fff;
}
.dark-theme #layout-room .up-menu-list .up-menu-item {
    color: #fff;
}
.dark-theme #layout-room .up-d-room-header {
    background-color: #000;
}
.dark-theme layout-room span.panel-list-item-title {
    color: #fff;
}
.dark-theme #layout-room input.up-input.search-input {
    color: #fff;
}
.dark-theme #layout-room .up-icon>svg {
    color:  color: #fff;
}
.dark-theme #layout-room .room-list-menu {
    background: #000000;
}
.dark-theme #layout-room .up-d-user-menu .location {
    background: #000000;
}
.dark-theme .up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
     background-color: #000!important;
}
.dark-theme .up-tab-btn, .up-tab-btn {
    color: #fff;
    background-color: #000000;
}
.dark-theme .up-tab-btn:active, .up-tab-btn:hover {
    color: #fff;
    background-color: #181818;
}
.dark-theme .up-nav-stacked .up-tab-btn {
    --tab-hover-color: #fff;
    --tab-hover-bg-color: #000000;
    --tab-active-color: #fff;
}
.dark-theme .up-dropdown-menu-wrapper {
    background-color: #000;
}
.dark-theme .up-menu-list .up-menu-item:hover {
   background-color: #000;
}
.dark-theme .up-modal .up-modal-body {
    background: #000;
}
.dark-theme a.up-skill-badge.nuxt-link-exact-active.nuxt-link-active.active {
    background-color: #6fd1ff!important;
}
.dark-theme .announcements-empty {
    background-color: #000;
}
.dark-theme .up-loader-overlay {
    background-color: #000;
    color: #fff;
}
.dark-theme .announcements-empty {
    background-color: #000;
}
@media (min-width: 992px){
    .dark-theme .nav-v2 :where(.nav-dropdown-menu) {
        background-color: #000;
        color: #fff;
    }
}
.dark-theme .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item:hover {
    background-color: #040b0e!important;
     color: #fff;
}
.dark-theme .nav-v2 .nav-dropdown-menu .nav-dropdown-list .org-type {
    color: #ffffff;
}
.dark-theme .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item {
    color: #fff;
}
.dark-theme .up-s-nav-icon {
  --icon-color: #fff;
}
.dark-theme .nav-v2 .nav-notifications-list li:hover {
    background-color: #101010;
}
.dark-theme #__nuxt .fls-bg-gray {
    background-color: #000000!important;
}
.dark-theme .nav-v2 .nav-right>li .nav-item {
    color: #14a800!important;
}
.dark-theme .up-btn-circle:not(.up-btn-primary):not([disabled]) .up-icon {
    color: #ffffff!important;
}
.dark-theme .up-card-header .up-nav-tabs button.up-tab-btn.px-20.mr-0.active {
    color: #fff!important;
}
.dark-theme form.nav-search-form {
    color: white!important;
     background-color: #040b0e!important;
       border-color: #fff;
}
.dark-theme input, select, textarea{
    color: #fff;
      border-color: #fff;
}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-form:focus-within, .nav-v2 .nav-search-form:hover {
     background-color: #040b0e!important;
       border-color: #959595;
}
}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-form:focus-within, .nav-v2 .nav-search-form:hover {
    background-color: #040b0e!important;
      border-color: #959595;
}
}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-form:hover, .nav-v2 .nav-search-form[focus-within] {
    background-color: #040b0e!important;
      border-color: #959595;
}
}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-form:focus-within, .nav-v2 .nav-search-form:hover {
  background-color: #040b0e!important;
    border-color: #959595;
}
}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-form:hover, .nav-v2 .nav-search-form[focus-within] {
   background-color: #040b0e!important;
     border-color: #959595;
}
}
.dark-theme input#input-icon {
    color: #fff!important;
      border-color: #959595;
}
.dark-theme .nav-v2 .nav-search-form:focus-within, .nav-v2 .nav-search-form:hover {
  background-color: #040b0e!important;
  color: #fff!important;
   border-color: #959595;
}
@media (min-width: 992px){
.dark-theme .nav-v2 .search-wrapper .nav-search-autosuggest-input.is-open, .nav-v2 .search-wrapper .nav-search-autosuggest-input:focus, .nav-v2 .search-wrapper .nav-search-switch-btn.is-open, .nav-v2 .search-wrapper .nav-search-switch-btn:focus {
   background-color: #040b0e!important;
        border-color: #959595;
   
}
}

@media (min-width: 992px)
{
.dark-theme .nav-v2 .search-wrapper .nav-search-autosuggest-input:hover, .nav-v2 .search-wrapper .nav-search-switch-btn:hover {
     background-color: #040b0e!important;
  color: #fff!important;
      border-color: #959595;
  }
  }
@media (min-width: 992px){
.dark-theme .nav-v2 .search-wrapper .nav-search-autosuggest-input:hover, .nav-v2 .search-wrapper .nav-search-switch-btn:hover {
     background-color: #040b0e!important;
  color: #fff!important;
      border-color: #959595;
}
}

@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-input-container:focus-within :where(.nav-search-autosuggest-input), .nav-v2 .nav-search-input-container:hover :where(.nav-search-autosuggest-input) {
     background-color: #040b0e!important;
  color: #fff!important;
      border-color: black;
}
}
@media (min-width: 992px){

.dark-theme .nav-v2 .nav-search-input-container:hover :where(.nav-search-autosuggest-input), .nav-v2 .nav-search-input-container[focus-within] :where(.nav-search-autosuggest-input) {
     background-color: #040b0e!important;
  color: #fff!important;
      border-color: black;
}}

@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-input-container:focus-within :where(.nav-search-autosuggest-input), .nav-v2 .nav-search-input-container:hover :where(.nav-search-autosuggest-input) {
     background-color: #040b0e!important;
  color: #fff!important;
      border-color: black;
}}
@media (min-width: 992px){
.dark-theme .nav-v2 .nav-search-input-container:hover :where(.nav-search-autosuggest-input), .nav-v2 .nav-search-input-container[focus-within] :where(.nav-search-autosuggest-input) {
     background-color: #040b0e!important;
  color: #fff!important;
        border-color: black;
}
}
.dark-theme ::placeholder {
  color: #5e6d55;
}
.dark-theme .up-tab-btn.active, .up-tab-btn.active:active, .up-tab-btn.active:hover {
    color: #14a800!important;
}
.dark-theme div.up-tab-btn.fl-overview-tab-header .tab-title-amount {
    color: #22dd22;
}
.dark-theme .up-card-section .text-muted {
    color: #6bc138!important;
}
.dark-theme .job-tile-list .text-muted {
    color: #5e8f41!important;
}
.dark-theme .popper>div .popper-inner {
    z-index: 2;
    position: relative;
    background: #000!important;
}
.dark-theme .up-table .state-today {
    background-color: #1c1919;
}
.dark-theme  .up-table td.state-future {
    background: #1c1919;
}
.dark-theme  .up-settings-list .up-settings-list-link {
    color: #14a805;
}
.dark-theme .air3-card-outline {
    --card-bg: #000;
}
.dark-theme .up-settings-list .up-settings-list-link.is-active {
    background: #1e1e1e;
}
.dark-theme .up-input-group-append>.up-icon, .up-input-group-between>.up-icon, .up-input-group-prepend>.up-icon {
    color: #fff;
}
.dark-theme .help-block {
    color: #b4bdae;
}
.dark-theme .up-dropdown-search {
    background-color: #000;
}
.dark-theme .up-pagination .page-num .up-pagination-item:not(.disabled) {
    color: #ffffff;
}
.dark-theme .up-menu-item-icon, .up-result-feedback {
    color: #ffffff;
}
.dark-theme .highlight {
    background-color: unset;
    color: aqua;
}
.dark-theme  .up-modal-footer.up-c-footer-inverse {
    background: #000;
}
.dark-theme .up-placeholder-shape {
    --placeholder-bg: #056302;
    --placeholder-bg-shimmer: #222222;
    --placeholder-shimmer-offset: 250px;
    min-height: 1em;
    background-image: linear-gradient(90deg,var(--placeholder-bg) 20%,var(--placeholder-bg-shimmer) 50%,var(--placeholder-bg) 80%);
    background-size: calc(var(--placeholder-shimmer-offset)*2) calc(var(--placeholder-shimmer-offset)/2);
    border-radius: var(--radius-sm);
    border-color: transparent!important;
    animation: placeholder-shimmer 1s linear infinite forwards;
}
.dark-theme .up-nav-tabs .up-tab-btn {
    --tab-active-border-color: #ffffff;
}
.dark-theme .up-card {
    border: 1px solid #ffffff!important;
}
.dark-theme .up-tab-btn.fl-overview-tab-header.active {
    border-bottom: 1px ridge #6bb216;
}
.dark-theme div.up-tab-btn.fl-overview-tab-header.active {
    box-shadow: inset 1px 0 0 #000, inset 1px 0 0 #000, inset 1px 0 0 #000, inset -1px 0 0 #000, inset -1px 0 0 #000, inset 0 -2px 0 #000000;
}
.dark-theme .up-tab-scroll-hint+.up-tab-content {
    border-top: 1px #fff solid;
    margin-top: unset;
}
.dark-theme .workroom-header {
    color: #108a00;
}
.dark-theme  .nuxt-link-exact-active {
    background-color: #040b0e;
}
.dark-theme .network-nav-item span {
    color: #ffffff;
}
.dark-theme .up-badge:not(.up-badge-tagline):not(.up-badge-flag).up-badge-neutral {
    color: #14a800;
}
.dark-theme .faqs .faq .blur {
    background: linear-gradient(90deg,hsla(0,0%,100%,0),#000 80%);
}
.dark-theme  .tips-for-success .tile:hover {
    background-color: #0c0c0c;
}
.dark-theme  .title a {
    color: #108a00;
}
.dark-theme .sidebar .list-item.active {
    background-color: #0c0c0c;
}
.dark-theme .up-btn-toggle-group label {
    color: #ffffff;
}
.dark-theme  .up-input-group-append .up-btn-link, .up-input-group-append .up-btn-link:hover, .up-input-group-between .up-btn-link, .up-input-group-between .up-btn-link:hover, .up-input-group-prepend .up-btn-link, .up-input-group-prepend .up-btn-link:hover {
    color: #108a00;
}
.dark-theme .connects-description, .connects-title {
    color: #ffffff;
}
.dark-theme   table tr.pending {
    background: #000000;
}
.dark-theme .up-slider-header .up-slider-prev-btn {
    color: #ffffff;
}
.dark-theme .up-slider-header {
    background: #03080a!important;
}
.dark-theme  .nav-v2.nav-visitor-skinny {
    --nav-visitor-bg: #001e00;
}
.dark-theme .nav-v2 .nav-status {
    background: #000;
}
.dark-theme .nav-v2 .nav-btn-status,  .dark-theme .nav-v2 .nav-btn-status:hover{
    background-color: #000;
}
.dark-theme .nav-v2 .active.nav-btn-status,  .dark-theme .nav-v2 .nav-btn-status:hover{
    background-color: #040b0e;
}
.dark-theme .nav-v2 .nav-notifications-list li .nav-notification-text:hover {
    color: #1ed506;
}
.dark-theme .nav-v2 .nav-notifications .nav-menu-item.nav-notifications-more {
    color: #07ad06;
}
.dark-theme .date-range-selector>button.range-selector-button {
    color: #ffffff!important;
}
.dark-theme .grouping-selector>button strong {
    color: #108a00!important;
}
.dark-theme .grouping-selector>button {
    color: #ffffff!important;
}
.dark-theme  .air3-alert.air3-alert-inline {
    color: #ffffff!important;
}
.dark-theme .up-table-responsive {
    background-color: #000000!important;
}
.dark-theme .nav-v2.nav-visitor-skinny {
    --nav-visitor-bg: #040b0e!important;
}
.dark-theme .text-muted {
    color: #ffffff!important;
}
.dark-theme main#main {
    background-color: #000!important;
}
.dark-theme div#__layout {
    background-color: #000!important;
}
@media (min-width: 700px)
.dark-theme  .nav-v2.nav-visitor-skinny .nav-wrapper {
    background: #000!important;
}
#user-top-navigation-container .up-s-nav-icon {
        --icon-color: #ffffff!important;
}
@media (min-width: 992px){
.dark-theme input, select, textarea {
    color: #fff!important;
    border-color: #ffffff!important;
    background-color: #000!important;
}
}
.air3-input-group.is-prepended {
    background-color: #000!important;
}
.air3-input-group .air3-input-prepend {
    color: #fff!important;
}
.air3-btn {
    --btn-bg: #000000!important;
}
.air3-btn:hover {
    --btn-bg: #000000!important;
}
.air3-tab-btn.is-active, .air3-tab-btn.is-active:active, .air3-tab-btn.is-active:hover {
    background: #081a02!important;
}
.air3-token-wrap a {
    background-color: #000000!important;
}
.job-tile-title a {
    color: #fff!important;
} 
.air3-card-section.air3-card-hover:focus-within, .air3-card-section.air3-card-hover:hover {
    
    background-color: #000!important;
    cursor: pointer;
}
.air3-token {
    background: #000000!important;
    color: #2b8825!important;
    border: var(--token-border-width-interactive) solid var(--token-border-color-interactive);
}
.air3-token:hover {
    color: #fff!important; 
}
.text-light, .text-light-on-inverse {
    color: #108a00!important;
}
.air3-token-container, .air3-token-container:hover, .air3-token-container:hover, .air3-token-container {
    --token-btn-gradient: hsl(0deg 0% 0% / 0%),#000000!important;
}
[data-test=job-tile-list]>.air3-card-section:focus-within .air3-token-container, [data-test=job-tile-list]>.air3-card-section:hover .air3-token-container {
    --token-btn-gradient: var(--transparent-white),#000000!important;
}
.air3-btn-primary-inverted {
    --btn-text: #ffffff!important;
}
.bg-gray-7, .bg-muted-light {
    background-color: #0a0a0a!important;
}
a.upwork-academy, a.upwork-academy:hover {
    color: #ffffff!important;
}
#fwh-sidebar-links a, #fwh-sidebar-links a:hover {
    color: #ffffff!important;
}
.air3-slider {
    background-color: #000!important;
}
.air3-slider-header {
 background-color: #000!important;
}
.air3-slider-header .air3-slider-prev-btn>.air3-slider-prev-icon:hover {
    --slider-close-text-icon: #ffffff!important;
}
.air3-slider-header .air3-slider-prev-btn>.air3-slider-prev-icon {
    --slider-close-text-icon: #ffffff!important;
}
.badge {
    background: #000000!important;
    color: #108a00!important;
     border: solid 1px #fff!important;
}
.air3-card-section.air3-card-hover:focus-within, .air3-card-section.air3-card-hover:hover {

    background-color: #000000!important;
    cursor: pointer;
}
.air3-card-visited {
    background-color: #0a0a0a!important;
}
.job-details-content .job-details-card {
    --card-radius: 0;
    --card-border: 0;
    background: #000!important;
}
section.air3-card-section button.air3-btn.air3-btn-block.air3-btn-primary{
    background-color: #14a800!important;
 }
section.air3-card-section .text-light-on-muted {
    color: #3f881d!important;
}
.air3-btn-circle:not([disabled]):not(.is-disabled):not(.air3-btn-primary):not(.air3-btn-secondary):not(.air3-btn-tertiary):not(.air3-btn-primary-inverted):not(.air3-btn-secondary-inverted):not(.air3-btn-tertiary-inverted):hover {
    --btn-bg: #0a0a0a;
    --btn-text: #ffffff!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) {
    background-color: #050b0e!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item {
    color: #ffffff!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item:hover {
    background-color: #000000!important;
    color: #ffffff!important;
}
.text-dark, .text-dark-on-inverse {
    color: #ffffff!important;
}
#user-top-navigation-container {
    background-color: #000!important;
     color: #ffffff!important;
}
@media (min-width: 992px){
    #user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) {
        background-color: #000!important;
     color: #ffffff!important;
  }
  .text-dark, .text-dark-on-inverse {
    color: #ffffff!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item:hover{
    background-color: #000000!important;
    color: #ffffff!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li .nav-menu-item:hover {
    background-color: #000000!important;
    color: #ffffff!important;
}
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li a.nav-menu-item:hover {
    background-color: #000000!important;
    color: #ffffff!important;
}
#user-top-navigation-container .nav-v2 :where(.nav-dropdown-menu) li button.nav-menu-item:hover {
    background-color: #000000!important;
    color: #ffffff!important;
}
`;














var html_style = `
  
/******************************/
#toggle{
    -webkit-appearance: none;
    appearance: none;
    height: 40px;
    width: 75px;
    background-color: #15181f;
    position: absolute;
    left: 0px;
    top: 25px;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
}
#toggle:after{
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    background-color: #ffffff;
    top: 5px;
    left: 7px;
    border-radius: 50%;
}
.dark-theme #toggle{
    background-color: #ffffff;
}
.dark-theme #toggle:after{
    background-color: transparent;
    box-shadow: 10px 10px #15181f;
    top: -4px;
    left: 30px;
}
@media (max-width: 992px){
  #toggle{
    top: 5px;
    }
}
`;




function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
function theme_time() {
    var needElement = document.getElementsByClassName('nav-header');
    needElement[0].innerHTML +='<div class="night"><input type="checkbox" id="toggle"></div> ';

    document.head.innerHTML +='<link href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap" rel="stylesheet">';


   var added_dark = document.createElement('style');
    added_dark.appendChild(document.createTextNode(html_style));
    document.head.appendChild(added_dark);




    document.getElementById("toggle").addEventListener("click", function(){
        document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
        if(document.body.classList.contains("dark-theme")){
            document.head.innerHTML +='<style id="night">' + html_style_night + '</style>';
            document.cookie ="theme=dark; path=/";
        }else{
            document.cookie = "theme=light; path=/";
            document.getElementById("night").remove();
        }
    });

    var theme = getCookie('theme');
    console.log(theme);
    if(theme==="dark"){
        document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
        document.head.innerHTML +='<style id="night">' + html_style_night + '</style>';
        console.log(theme);
    }
}

/**
 * Wait for an element before resolving a promise
 * @param {String} querySelector - Selector of element to wait for
 * @param {Integer} timeout - Milliseconds to wait before timing out, or 0 for no timeout
 */
function waitForElement(querySelector, timeout=0){
    const startTime = new Date().getTime();
    return new Promise((resolve, reject)=>{
        const timer = setInterval(()=>{
            const now = new Date().getTime();
            if(document.querySelector(querySelector)){
                clearInterval(timer);
                resolve();
            }else if(timeout && now - startTime >= timeout){
                clearInterval(timer);
                reject();
            }
        }, 600);
    });
}


waitForElement("#nav-main", 3000).then(function(){
    theme_time();
}).catch(()=>{
    //alert("element did not load in 3 seconds");
});




