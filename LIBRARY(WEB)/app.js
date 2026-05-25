// Redefine lucide.createIcons to automatically support <i-lucide name="..."> elements
if (window.lucide) {
  const originalCreateIcons = window.lucide.createIcons;
  window.lucide.createIcons = function(options) {
    document.querySelectorAll('i-lucide').forEach(elem => {
      const name = elem.getAttribute('name');
      if (name) {
        const newElem = document.createElement('i');
        newElem.setAttribute('data-lucide', name);
        // Copy classes
        newElem.className = elem.className;
        // Copy styles
        if (elem.hasAttribute('style')) {
          newElem.setAttribute('style', elem.getAttribute('style'));
        }
        // Copy title
        if (elem.hasAttribute('title')) {
          newElem.setAttribute('title', elem.getAttribute('title'));
        }
        elem.parentNode.replaceChild(newElem, elem);
      }
    });
    originalCreateIcons(options);
  };
}

// ==========================================================================
// LOCALIZATION DICTIONARY (ENGLISH & TAMIL)
// ==========================================================================
const translations = {
  en: {
    login_title: "Library Portal",
    login_subtitle: "Access the digital library management system",
    role_label: "Select Role:",
    role_admin: "Administrator",
    role_student: "Student",
    username_label: "Username / Student ID",
    password_label: "Password",
    credentials_tip_title: "Demo Credentials:",
    admin_credential_tip: "Admin: admin / admin123",
    student_credential_tip: "Student: bala / 2006 or ST002 / 2006",
    remember_me: "Remember me",
    forgot_password: "Forgot password?",
    login_btn: "Sign In",
    nav_dashboard: "Dashboard",
    nav_books: "Books Catalog",
    nav_borrow: "Issue / Return",
    nav_users: "User Management",
    nav_settings: "Settings",
    logout_btn: "Logout",
    sidebar_menu_header: "Menu",
    dashboard_title: "Library Dashboard",
    notifications_title: "System Alerts",
    clear_all: "Clear All",
    stat_total_books: "Total Books",
    stat_available_books: "Available Books",
    stat_borrowed_books: "Books Borrowed",
    stat_returned_books: "Books Returned",
    stat_pending_submissions: "Pending Submissions",
    pending_returns_panel: "Pending Submissions Track",
    recent_activity_panel: "Recent Library Activities",
    th_student_id: "Student ID",
    th_student_name: "Student Name",
    th_book_taken: "Book Borrowed",
    th_due_date: "Due Date",
    th_status: "Status",
    th_student: "Student",
    th_book: "Book Taken",
    th_borrow_date: "Issued",
    th_accumulated_fine: "Fine (₹)",
    th_action: "Actions",
    th_user_id: "Student ID",
    th_user_name: "Student Name",
    th_current_borrowed: "Current Borrowed Book",
    th_borrow_history_count: "Total Borrowings",
    th_user_status: "Borrow Status",
    th_user_actions: "Actions",
    opt_all_categories: "All Categories",
    opt_cs: "Computer Science",
    opt_maths: "Mathematics",
    opt_tamil: "Tamil Literature",
    opt_electronics: "Electronics",
    opt_design: "Design",
    opt_all_status: "All Statuses",
    opt_status_avail: "Available",
    opt_status_issued: "Issued",
    search_placeholder: "Search by Book ID, Name, Author...",
    loan_search_placeholder: "Search loans by student or book name...",
    user_search_placeholder: "Search students by ID or Name...",
    btn_add_book: "Add New Book",
    btn_add_user: "Add Student User",
    issue_book_title: "Issue Book Transaction",
    issue_label_student: "Select Student",
    opt_select_student: "Select a student user...",
    issue_label_book: "Select Book",
    opt_select_book: "Select an available book...",
    issue_label_date: "Issue Date",
    issue_label_due: "Due Date",
    issue_notice_msg: "Borrowed books are assigned a standard return window of 14 days. Late returns accumulate a fine of ₹5/day.",
    issue_confirm_btn: "Confirm Book Issuance",
    active_loans_title: "Active Borrow Records & Returns",
    app_settings_section: "⚙️ App Settings",
    setting_theme: "Color Mode",
    setting_theme_desc: "Switch between light and dark display modes.",
    theme_toggle_btn: "Switch Theme",
    setting_language: "System Language",
    setting_lang_desc: "Select between English and Tamil (தமிழ்).",
    setting_notifications: "System Alerts & Notifications",
    setting_notify_desc: "Receive notifications of library borrowings and logs.",
    setting_auto_logout: "Auto Logout Delay",
    setting_logout_desc: "Log out user session after periods of inactivity.",
    opt_logout_never: "Never",
    security_section: "Security & Profile",
    change_old_pass: "Current Password",
    change_new_pass: "New Password",
    btn_update_password: "Update Password",
    admin_settings_section: "🛡️ Administrative Operations (Admin Only)",
    reports_header: "Data Reports & Backup",
    reports_desc: "Compile status reports of current catalog inventory and students with outstanding returns.",
    report_books_btn: "Generate Books Inventory Report",
    report_defaulters_btn: "Generate Defaulters Report",
    backup_db_btn: "Backup Database (JSON)",
    activity_logs_header: "Full System Logs",
    activity_logs_desc: "Audit log trace records representing administrator and borrowing activities.",
    info_book_id: "Book ID:",
    info_author: "Author Name:",
    info_category: "Category:",
    info_isbn: "ISBN Number:",
    info_pub_date: "Publication Date:",
    info_shelf: "Shelf Location:",
    info_quantity: "Quantity:",
    info_status: "Status:",
    btn_close: "Close",
    btn_borrow_this: "Borrow This Book",
    add_book_modal_title: "Add New Book",
    edit_book_modal_title: "Edit Book",
    book_form_id: "Book ID",
    book_form_name: "Book Name",
    book_form_author: "Author Name",
    book_form_category: "Category",
    book_form_isbn: "ISBN Number",
    book_form_pubdate: "Publication Date",
    book_form_qty: "Quantity",
    book_form_shelf: "Shelf Location",
    btn_cancel: "Cancel",
    btn_save: "Save Changes",
    add_user_modal_title: "Add Student User",
    edit_user_modal_title: "Edit Student User",
    user_form_id: "Student ID",
    user_form_name: "Student Name",
    user_form_password: "Password",
    history_modal_title: "Borrow History",
    confirm_modal_title: "Are you sure?",
    confirm_modal_text: "Are you sure you want to perform this action?",
    btn_yes: "Yes, Proceed",
    btn_no: "No",
    toast_login_success: "Successfully signed in!",
    toast_login_fail: "Invalid login credentials! Please check role and password.",
    toast_logout: "Safely logged out of the application.",
    toast_book_added: "Book added successfully to database.",
    toast_book_updated: "Book details updated successfully.",
    toast_book_deleted: "Book removed from catalog.",
    toast_user_added: "Student record added successfully.",
    toast_user_updated: "Student details updated.",
    toast_user_deleted: "Student record deleted.",
    toast_issue_success: "Book successfully issued to student.",
    toast_return_success: "Book returned successfully.",
    toast_pass_changed: "Password changed successfully.",
    toast_pass_wrong: "Current password does not match!",
    toast_backup_success: "Database backup downloaded successfully.",
    toast_autologout: "Session expired due to inactivity."
  },
  ta: {
    login_title: "நூலக போர்ட்டல்",
    login_subtitle: "டிஜிட்டல் நூலக மேலாண்மை அமைப்பை அணுகவும்",
    role_label: "பயனாளர் வகை:",
    role_admin: "நூலகர் (நிர்வாகி)",
    role_student: "மாணவர்",
    username_label: "பயனர் பெயர் / மாணவர் ஐடி",
    password_label: "கடவுச்சொல்",
    credentials_tip_title: "டெமோ சான்றுகள்:",
    admin_credential_tip: "நிர்வாகி: admin / admin123",
    student_credential_tip: "மாணவர்: bala / 2006 அல்லது ST002 / 2006",
    remember_me: "என்னை நினைவில் கொள்",
    forgot_password: "கடவுச்சொல் மறந்ததா?",
    login_btn: "உள்நுழைக",
    nav_dashboard: "முகப்புப்பலகை",
    nav_books: "புத்தகங்களின் பட்டியல்",
    nav_borrow: "வழங்குதல் / திரும்புதல்",
    nav_users: "மாணவர் மேலாண்மை",
    nav_settings: "அமைப்புகள்",
    logout_btn: "வெளியேறு",
    sidebar_menu_header: "மெனு",
    dashboard_title: "நூலக முகப்புப்பலகை",
    notifications_title: "கணினி எச்சரிக்கைகள்",
    clear_all: "அனைத்தையும் நீக்கு",
    stat_total_books: "மொத்த புத்தகங்கள்",
    stat_available_books: "கிடைக்கும் புத்தகங்கள்",
    stat_borrowed_books: "வழங்கப்பட்டவை",
    stat_returned_books: "திரும்பப் பெறப்பட்டவை",
    stat_pending_submissions: "நிலுவையில் உள்ளவை",
    pending_returns_panel: "நிலுவையிலுள்ள புத்தக ஒப்படைப்பு",
    recent_activity_panel: "சமீபத்திய நூலக நடவடிக்கைகள்",
    th_student_id: "மாணவர் ஐடி",
    th_student_name: "மாணவர் பெயர்",
    th_book_taken: "வாங்கிய புத்தகம்",
    th_due_date: "ஒப்படைக்க வேண்டிய நாள்",
    th_status: "நிலை",
    th_student: "மாணவர்",
    th_book: "வாங்கிய புத்தகம்",
    th_borrow_date: "வழங்கிய நாள்",
    th_accumulated_fine: "அபராதம் (₹)",
    th_action: "நடவடிக்கைகள்",
    th_user_id: "மாணவர் ஐடி",
    th_user_name: "மாணவர் பெயர்",
    th_current_borrowed: "தற்போதைய புத்தகம்",
    th_borrow_history_count: "மொத்த இரவல்கள்",
    th_user_status: "இரவல் நிலை",
    th_user_actions: "நடவடிக்கைகள்",
    opt_all_categories: "அனைத்து பிரிவுகளும்",
    opt_cs: "கணினி அறிவியல்",
    opt_maths: "கணிதம்",
    opt_tamil: "தமிழ் இலக்கியம்",
    opt_electronics: "மின்னணுவியல்",
    opt_design: "வடிவமைப்பு",
    opt_all_status: "அனைத்து நிலைகளும்",
    opt_status_avail: "கிடைப்பவை",
    opt_status_issued: "வழங்கப்பட்டவை",
    search_placeholder: "புத்தகம் ஐடி, பெயர், ஆசிரியர் மூலம் தேடுக...",
    loan_search_placeholder: "மாணவர் அல்லது புத்தகம் பெயர் மூலம் தேடுக...",
    user_search_placeholder: "மாணவர் ஐடி அல்லது பெயர் மூலம் தேடுக...",
    btn_add_book: "புதிய புத்தகம் சேர்",
    btn_add_user: "மாணவரைச் சேர்",
    issue_book_title: "புத்தகம் வழங்கும் பரிவர்த்தனை",
    issue_label_student: "மாணவரைத் தேர்ந்தெடு",
    opt_select_student: "மாணவரைத் தேர்ந்தெடுக்கவும்...",
    issue_label_book: "புத்தகத்தைத் தேர்ந்தெடு",
    opt_select_book: "கிடைக்கும் புத்தகத்தைத் தேர்ந்தெடுக்கவும்...",
    issue_label_date: "வழங்கிய நாள்",
    issue_label_due: "ஒப்படைக்க வேண்டிய நாள்",
    issue_notice_msg: "இரவல் வாங்கப்படும் புத்தகங்கள் 14 நாட்களுக்குள் ஒப்படைக்கப்பட வேண்டும். தாமதமாகும் நாட்களுக்கு நாள் ஒன்றுக்கு ₹5 அபராதம் விதிக்கப்படும்.",
    issue_confirm_btn: "புத்தகம் வழங்குவதை உறுதிசெய்",
    active_loans_title: "தற்போதைய இரவல் பதிவுகள் மற்றும் ஒப்படைப்புகள்",
    app_settings_section: "⚙️ பயன்பாட்டு அமைப்புகள்",
    setting_theme: "வண்ண முறை",
    setting_theme_desc: "பகல் மற்றும் இரவு காட்சி முறைகளுக்கு இடையில் மாற்றவும்.",
    theme_toggle_btn: "தீம் மாற்றவும்",
    setting_language: "கணினி மொழி",
    setting_lang_desc: "ஆங்கிலம் மற்றும் தமிழ் மொழிகளுக்கு இடையில் தேர்ந்தெடுக்கவும்.",
    setting_notifications: "கணினி எச்சரிக்கைகள் மற்றும் அறிவிப்புகள்",
    setting_notify_desc: "நூலக பரிவர்த்தனைகள் மற்றும் பதிவுகளின் அறிவிப்புகளைப் பெறுக.",
    setting_auto_logout: "தானியங்கி வெளியேற்ற நேரம்",
    setting_logout_desc: "செயலின்றி இருக்கும்போது அமர்வை தானாகவே வெளியேற்றவும்.",
    opt_logout_never: "வேண்டாம்",
    security_section: "பாதுகாப்பு & சுயவிவரம்",
    change_old_pass: "தற்போதைய கடவுச்சொல்",
    change_new_pass: "புதிய கடவுச்சொல்",
    btn_update_password: "கடவுச்சொல்லைப் புதுப்பி",
    admin_settings_section: "🛡️ நிர்வாக நடவடிக்கைகள் (நிர்வாகி மட்டும்)",
    reports_header: "தரவு அறிக்கைகள் & காப்புப்பிரதி",
    reports_desc: "தற்போதைய புத்தகங்கள் மற்றும் அபராதம் செலுத்த வேண்டிய மாணவர்களின் அறிக்கைகளைத் தயாரித்தல்.",
    report_books_btn: "புத்தகப் பட்டியல் அறிக்கையை உருவாக்கு",
    report_defaulters_btn: "அபராததாரர் அறிக்கையை உருவாக்கு",
    backup_db_btn: "தரவுத்தளக் காப்புப்பிரதி (JSON)",
    activity_logs_header: "முழு கணினி பதிவுகள்",
    activity_logs_desc: "நிர்வாகி மற்றும் இரவல் நடவடிக்கைகளைக் குறிக்கும் தணிக்கைப் பதிவுகள்.",
    info_book_id: "புத்தகம் ஐடி:",
    info_author: "ஆசிரியர் பெயர்:",
    info_category: "பிரிவு:",
    info_isbn: "ISBN எண்:",
    info_pub_date: "வெளியிடப்பட்ட தேதி:",
    info_shelf: "அலமாரி இடம்:",
    info_quantity: "அளவு:",
    info_status: "நிலை:",
    btn_close: "மூடு",
    btn_borrow_this: "இந்த புத்தகத்தை இரவல் வாங்கு",
    add_book_modal_title: "புதிய புத்தகம் சேர்",
    edit_book_modal_title: "புத்தகத்தைத் திருத்து",
    book_form_id: "புத்தகம் ஐடி",
    book_form_name: "புத்தகம் பெயர்",
    book_form_author: "ஆசிரியர் பெயர்",
    book_form_category: "பிரிவு",
    book_form_isbn: "ISBN எண்",
    book_form_pubdate: "வெளியிடப்பட்ட தேதி",
    book_form_qty: "அளவு",
    book_form_shelf: "அலமாரி இடம்",
    btn_cancel: "ரத்து செய்",
    btn_save: "மாற்றங்களைச் சேமி",
    add_user_modal_title: "மாணவரைச் சேர்",
    edit_user_modal_title: "மாணவர் விவரங்களைத் திருத்து",
    user_form_id: "மாணவர் ஐடி",
    user_form_name: "மாணவர் பெயர்",
    user_form_password: "கடவுச்சொல்",
    history_modal_title: "இரவல் வரலாறு",
    confirm_modal_title: "நிச்சயமாகவா?",
    confirm_modal_text: "இந்த நடவடிக்கையைச் செய்ய விரும்புகிறீர்களா?",
    btn_yes: "ஆம், தொடரவும்",
    btn_no: "இல்லை",
    toast_login_success: "வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!",
    toast_login_fail: "தவறான உள்நுழைவு விவரங்கள்! கடவுச்சொல்லைச் சரிபார்க்கவும்.",
    toast_logout: "நூலக போர்ட்டலில் இருந்து பாதுகாப்பாக வெளியேறினீர்கள்.",
    toast_book_added: "புத்தகம் தரவுத்தளத்தில் வெற்றிகரமாகச் சேர்க்கப்பட்டது.",
    toast_book_updated: "புத்தக விவரங்கள் புதுப்பிக்கப்பட்டன.",
    toast_book_deleted: "புத்தகம் பட்டியலில் இருந்து நீக்கப்பட்டது.",
    toast_user_added: "மாணவர் விவரம் வெற்றிகரமாகச் சேர்க்கப்பட்டது.",
    toast_user_updated: "மாணவர் விவரங்கள் புதுப்பிக்கப்பட்டன.",
    toast_user_deleted: "மாணவர் விவரம் நீக்கப்பட்டது.",
    toast_issue_success: "புத்தகம் மாணவருக்கு வெற்றிகரமாக வழங்கப்பட்டது.",
    toast_return_success: "புத்தகம் வெற்றிகரமாகத் திரும்பப் பெறப்பட்டது.",
    toast_pass_changed: "கடவுச்சொல் வெற்றிகரமாக மாற்றப்பட்டது.",
    toast_pass_wrong: "தற்போதைய கடவுச்சொல் தவறானது!",
    toast_backup_success: "தரவுத்தளக் காப்புப்பிரதி வெற்றிகரமாகப் பதிவிறக்கப்பட்டது.",
    toast_autologout: "செயலின்மை காரணமாக அமர்வு காலாவதியானது."
  }
};

// Extend localization dictionary with upgrades
translations.en = {
  ...translations.en,
  stat_total_students: "Total Students",
  stat_daily_activity: "Daily Activity",
  stud_holding_label: "Books Held",
  recommended_panel_title: "Recommended Books For You",
  recent_added_panel_title: "Recently Added Additions",
  alerts_header_title: "Borrow Status & Return Date Reminders",
  btn_show_bookmarks: "Bookmarks",
  btn_show_all: "Show All",
  approvals_queue_title: "Student Requests & Approvals Queue",
  th_request_date: "Requested Date",
  th_request_type: "Request Type",
  th_status: "Status",
  th_action: "Actions",
  personal_library_title: "My Library",
  download_receipt_btn: "Download Borrowing Receipt",
  my_loans_section_title: "Active Borrowed Books",
  my_requests_section_title: "Pending Booking & Reservations",
  profile_details_header: "Profile Information",
  profile_label_name: "Name",
  btn_save_profile: "Save Profile Details",
  change_pass_header: "Change Password",
  btn_details: "Details",
  btn_borrow_this: "Claim Book",
  setting_color_palette: "Theme Accent Color",
  setting_palette_desc: "Select different color schemes for the library system.",
  opt_theme_indigo: "Indigo (Violet)",
  opt_theme_emerald: "Emerald (Teal)",
  opt_theme_crimson: "Crimson (Ruby)",
  opt_theme_amber: "Amber (Gold)",
  opt_theme_midnight: "Midnight (Cyan)",
  opt_theme_sunset: "Sunset (Orange/Pink)",
  opt_theme_ocean: "Ocean (Blue/Teal)",
  opt_theme_forest: "Forest (Green/Earth)",
  opt_theme_berry: "Berry (Purple/Pink)",
  setting_button_style: "Button Design Style",
  setting_button_desc: "Choose visual styling combinations for UI buttons.",
  opt_btn_glow: "Glow Gradient",
  opt_btn_solid: "Solid Neon",
  opt_btn_glass: "Glass Outline",
  opt_btn_retro: "Cyber Flat",
  opt_btn_neumorphic: "Neumorphic Soft 3D",
  opt_btn_pop: "3D Pop Action",
  opt_btn_minimal: "Minimal Ghost",
  btn_bookmark: "Bookmark",
  btn_bookmarked: "Bookmarked",
  setting_font_size: "Display Font Size",
  setting_font_desc: "Scale typography size across all library panels.",
  opt_font_sm: "Small",
  opt_font_md: "Medium",
  opt_font_lg: "Large",
  setting_sound: "Synthesized App Sound",
  setting_sound_desc: "Generate audio tone chimes during click operations.",
  toast_request_submitted: "Request submitted successfully for admin approval.",
  toast_request_approved: "Request approved.",
  toast_request_declined: "Request declined.",
  toast_bookmark_added: "Book added to bookmarks.",
  toast_bookmark_removed: "Book removed from bookmarks.",
  toast_profile_updated: "Profile information updated successfully.",
  toast_request_cancelled: "Pending request cancelled.",
  th_student: "Student",
  th_book: "Book",
  
  // Game Launcher My Library
  lbl_total_claimed: "Total Claimed Books",
  lbl_active_borrowed: "Active Borrowed Books",
  lbl_returned_books: "Returned Books",
  lbl_favorite_books: "Favorite Books",
  cat_reading: "Currently Reading",
  cat_borrowed: "Borrowed Books",
  cat_returned: "Returned Books",
  cat_pending: "Pending Return",
  cat_favorites: "Favorites",
  cat_recent: "Recently Claimed",
  btn_claim_book: "Claim Book",
  btn_read_now: "Read Now",
  btn_continue_reading: "Continue Reading",
  lbl_reading_sim: "Reading Simulator",
  lbl_simulating_progress: "Simulating reading progress...",
  toast_reading_finished: "Claimed reading session completed! Logged to history.",
  lbl_status_reading: "Reading",
  lbl_status_borrowed: "Borrowed",
  lbl_status_returned: "Returned",
  lbl_status_pending: "Pending",
  lbl_status_expired: "Expired"
};

translations.ta = {
  ...translations.ta,
  stat_total_students: "மொத்த மாணவர்கள்",
  stat_daily_activity: "தினசரி செயல்பாடு",
  stud_holding_label: "கைவசமுள்ள புத்தகங்கள்",
  recommended_panel_title: "உங்களுக்கான பரிந்துரைக்கப்பட்ட புத்தகங்கள்",
  recent_added_panel_title: "சமீபத்திய புதிய புத்தகங்கள்",
  alerts_header_title: "இரவல் நிலை & ஒப்படைப்பு நினைவூட்டல்",
  btn_show_bookmarks: "புத்தகக்குறிகள்",
  btn_show_all: "அனைத்தும் காட்டு",
  approvals_queue_title: "மாணவர் கோரிக்கைகள் & ஒப்புதல் வரிசை",
  th_request_date: "கோரிய நாள்",
  th_request_type: "கோரிக்கை வகை",
  th_status: "நிலை",
  th_action: "நடவடிக்கைகள்",
  personal_library_title: "எனது நூலகம்",
  download_receipt_btn: "இரவல் ரசீதை பதிவிறக்கு",
  my_loans_section_title: "கைவசமுள்ள புத்தகங்கள்",
  my_requests_section_title: "நிலுவையிலுள்ள முன்பதிவுகள்",
  profile_details_header: "சுயவிவர தகவல்",
  profile_label_name: "பெயர்",
  btn_save_profile: "சுயவிவரத்தைச் சேமி",
  change_pass_header: "கடவுச்சொல்லை மாற்று",
  btn_details: "விவரம்",
  btn_borrow_this: "கோரவும்",
  setting_color_palette: "தீம் நிறம்",
  setting_palette_desc: "நூலக கணினிக்கு வேறுபட்ட வண்ணத் திட்டங்களைத் தேர்ந்தெடுக்கவும்.",
  opt_theme_indigo: "இண்டிகோ (ஊதா)",
  opt_theme_emerald: "எமரால்டு (பச்சை)",
  opt_theme_crimson: "கிரிம்சன் (சிவப்பு)",
  opt_theme_amber: "அம்பர் (தங்கம்)",
  opt_theme_midnight: "மிட்நைட் (மஞ்சள்-நீலம்)",
  opt_theme_sunset: "சன்செட் (ஆரஞ்சு/பிங்க்)",
  opt_theme_ocean: "ஓஷன் (நீலம்/பச்சை)",
  opt_theme_forest: "ஃபாரஸ்ட் (பச்சை/பழுப்பு)",
  opt_theme_berry: "பெர்ரி (ஊதா/பிங்க்)",
  setting_button_style: "பொத்தான் வடிவமைப்பு பாணி",
  setting_button_desc: "பொத்தான்களுக்கான வண்ண மற்றும் வடிவமைப்பு பாணியைத் தேர்ந்தெடுக்கவும்.",
  opt_btn_glow: "பளபளப்பான கிரேடியண்ட்",
  opt_btn_solid: "சாலிட் நியான்",
  opt_btn_glass: "கண்ணாடி அவுட்லைன்",
  opt_btn_retro: "சைபர் பிளாட்",
  opt_btn_neumorphic: "நியூமார்பிக் 3D",
  opt_btn_pop: "3D பாப்",
  opt_btn_minimal: "மினிமல் கோஸ்ட்",
  btn_bookmark: "புக்மார்க்",
  btn_bookmarked: "புக்மார்க் செய்யப்பட்டது",
  setting_font_size: "எழுத்துரு அளவு",
  setting_font_desc: "அனைத்து நூலக பேனல்களிலும் எழுத்துரு அளவை மாற்றியமைக்கவும்.",
  opt_font_sm: "சிறிய",
  opt_font_md: "நடுத்தர",
  opt_font_lg: "பெரிய",
  setting_sound: "பயன்பாட்டு ஒலி",
  setting_sound_desc: "கிளிக் செய்யும் போது ஆடியோ டோனை உருவாக்கவும்.",
  toast_request_submitted: "நிர்வாகியின் ஒப்புதலுக்காக கோரிக்கை சமர்ப்பிக்கப்பட்டது.",
  toast_request_approved: "கோரிக்கை அங்கீகரிக்கப்பட்டது.",
  toast_request_declined: "கோரிக்கை நிராகரிக்கப்பட்டது.",
  toast_bookmark_added: "புத்தகம் புத்தகக்குறிகளில் சேர்க்கப்பட்டது.",
  toast_bookmark_removed: "புத்தகக்குறி நீக்கப்பட்டது.",
  toast_profile_updated: "சுயவிவரம் வெற்றிகரமாகப் புதுப்பிக்கப்பட்டது.",
  toast_request_cancelled: "நிலுவை கோரிக்கை ரத்து செய்யப்பட்டது.",
  th_student: "மாணவர்",
  th_book: "புத்தகம்",
  
  // Game Launcher My Library
  lbl_total_claimed: "மொத்த உரிமைக்கோரல்கள்",
  lbl_active_borrowed: "கைவசமுள்ள புத்தகங்கள்",
  lbl_returned_books: "ஒப்படைக்கப்பட்ட புத்தகங்கள்",
  lbl_favorite_books: "விருப்பமான புத்தகங்கள்",
  cat_reading: "வாசிப்பவை",
  cat_borrowed: "இரவல்கள்",
  cat_returned: "திரும்பியவை",
  cat_pending: "ஒப்படைப்பு நிலுவை",
  cat_favorites: "விருப்பமானவை",
  cat_recent: "சமீபத்திய இரவல்கள்",
  btn_claim_book: "கோரவும்",
  btn_read_now: "வாசி",
  btn_continue_reading: "தொடர்ந்து வாசி",
  lbl_reading_sim: "வாசிப்பு சிமுலேட்டர்",
  lbl_simulating_progress: "வாசிப்பு செயல்முறை உருவகப்படுத்துகிறது...",
  toast_reading_finished: "வாசிப்பு அமர்வு வெற்றிகரமாக முடிந்தது! வரலாற்றில் பதிவு செய்யப்பட்டது.",
  lbl_status_reading: "வாசிக்கிறது",
  lbl_status_borrowed: "இரவல்",
  lbl_status_returned: "திரும்பியது",
  lbl_status_pending: "நிலுவை",
  lbl_status_expired: "காலாவதியானது"
};

// ==========================================================================
// SEED DATA / DEFAULT DATABASE STATE
// ==========================================================================
const DEFAULT_BOOKS = [
  { id: "B001", name: "Python Programming Basics", author: "Guido van Rossum", category: "Computer Science", isbn: "978-0134076430", pubDate: "2018-03-12", qty: 4, shelf: "Shelf A-1", color: "#6366f1" },
  { id: "B002", name: "Data Structures Using C", author: "Reema Thareja", category: "Computer Science", isbn: "978-0198099307", pubDate: "2014-07-20", qty: 3, shelf: "Shelf A-2", color: "#a855f7" },
  { id: "B003", name: "Java Fundamentals", author: "Herbert Schildt", category: "Computer Science", isbn: "978-1260440232", pubDate: "2019-11-05", qty: 5, shelf: "Shelf A-3", color: "#ec4899" },
  { id: "B004", name: "Artificial Intelligence Basics", author: "Stuart Russell", category: "Computer Science", isbn: "978-0134610993", pubDate: "2020-04-28", qty: 2, shelf: "Shelf A-4", color: "#f43f5e" },
  { id: "B005", name: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Computer Science", isbn: "978-0132126953", pubDate: "2010-10-07", qty: 3, shelf: "Shelf B-1", color: "#3b82f6" },
  { id: "B006", name: "Database Management Systems", author: "Raghu Ramakrishnan", category: "Computer Science", isbn: "978-0072465631", pubDate: "2002-08-14", qty: 4, shelf: "Shelf B-2", color: "#06b6d4" },
  { id: "B007", name: "Operating Systems Concepts", author: "Abraham Silberschatz", category: "Computer Science", isbn: "978-1118063330", pubDate: "2012-01-11", qty: 2, shelf: "Shelf B-3", color: "#14b8a6" },
  { id: "B008", name: "Web Development Essentials", author: "Jon Duckett", category: "Computer Science", isbn: "978-1119038634", pubDate: "2014-06-25", qty: 4, shelf: "Shelf B-4", color: "#10b981" },
  { id: "B009", name: "Machine Learning Intro", author: "Aurelien Geron", category: "Computer Science", isbn: "978-1492032649", pubDate: "2019-09-05", qty: 2, shelf: "Shelf C-1", color: "#84cc16" },
  { id: "B010", name: "Cloud Computing", author: "Kai Hwang", category: "Computer Science", isbn: "978-0123858801", pubDate: "2011-10-19", qty: 3, shelf: "Shelf C-2", color: "#eab308" },
  { id: "B011", name: "Tamil Literature History", author: "Mu. Varadarajan", category: "Tamil Literature", isbn: "978-8126019311", pubDate: "1972-04-01", qty: 5, shelf: "Shelf TL-1", color: "#f97316" },
  { id: "B012", name: "Engineering Mathematics", author: "B.S. Grewal", category: "Mathematics", isbn: "978-8193328491", pubDate: "2017-06-15", qty: 6, shelf: "Shelf M-1", color: "#ef4444" },
  { id: "B013", name: "Cyber Security Basics", author: "Charles J. Brooks", category: "Computer Science", isbn: "978-1119475224", pubDate: "2018-08-28", qty: 3, shelf: "Shelf C-3", color: "#6366f1" },
  { id: "B014", name: "Software Engineering", author: "Ian Sommerville", category: "Computer Science", isbn: "978-0133943030", pubDate: "2015-04-03", qty: 4, shelf: "Shelf C-4", color: "#a855f7" },
  { id: "B015", name: "Digital Electronics", author: "Morris Mano", category: "Electronics", isbn: "978-0132774208", pubDate: "2012-03-02", qty: 3, shelf: "Shelf E-1", color: "#ec4899" },
  { id: "B016", name: "Internet of Things", author: "Arshdeep Bahga", category: "Computer Science", isbn: "978-0996025515", pubDate: "2014-08-15", qty: 3, shelf: "Shelf D-1", color: "#f43f5e" },
  { id: "B017", name: "Mobile App Development", author: "Bill Phillips", category: "Computer Science", isbn: "978-0134706054", pubDate: "2017-09-09", qty: 2, shelf: "Shelf D-2", color: "#3b82f6" },
  { id: "B018", name: "Linux Administration", author: "Evi Nemeth", category: "Computer Science", isbn: "978-0134277554", pubDate: "2017-09-14", qty: 3, shelf: "Shelf D-3", color: "#06b6d4" },
  { id: "B019", name: "C++ Programming", author: "Bjarne Stroustrup", category: "Computer Science", isbn: "978-0321563842", pubDate: "2013-05-19", qty: 4, shelf: "Shelf D-4", color: "#14b8a6" },
  { id: "B020", name: "Graphic Design Basics", author: "Ellen Lupton", category: "Design", isbn: "978-1568987071", pubDate: "2008-04-02", qty: 3, shelf: "Shelf DS-1", color: "#10b981" },
  { id: "B021", name: "Embedded Systems", author: "Raj Kamal", category: "Electronics", isbn: "978-0070499102", pubDate: "2008-05-18", qty: 2, shelf: "Shelf E-2", color: "#84cc16" },
  { id: "B022", name: "Computer Architecture", author: "John L. Hennessy", category: "Computer Science", isbn: "978-0128119051", pubDate: "2017-11-23", qty: 3, shelf: "Shelf B-5", color: "#eab308" },
  { id: "B023", name: "UI/UX Design", author: "Don Norman", category: "Design", isbn: "978-0465050659", pubDate: "2013-11-05", qty: 4, shelf: "Shelf DS-2", color: "#f97316" },
  { id: "B024", name: "Networking Fundamentals", author: "Bruce Hartpence", category: "Computer Science", isbn: "978-1449306595", pubDate: "2011-06-03", qty: 4, shelf: "Shelf B-6", color: "#ef4444" },
  { id: "B025", name: "Algorithms and Analysis", author: "Thomas H. Cormen", category: "Computer Science", isbn: "978-0262033848", pubDate: "2009-07-31", qty: 3, shelf: "Shelf A-5", color: "#6366f1" }
];

const DEFAULT_USERS = [
  { id: "ST001", name: "Hariprasad", password: "2006" },
  { id: "ST002", name: "Aravind", password: "2006" },
  { id: "ST003", name: "Karthikeyan", password: "2006" },
  { id: "ST004", name: "Praveen Kumar", password: "2006" },
  { id: "ST005", name: "Surya", password: "2006" },
  { id: "ST006", name: "Vignesh", password: "2006" },
  { id: "ST007", name: "Dinesh", password: "2006" },
  { id: "ST008", name: "Bharath", password: "2006" },
  { id: "ST009", name: "Naveen", password: "2006" },
  { id: "ST010", name: "Gokul", password: "2006" },
  { id: "bala", name: "Bala", password: "2006" }
];

// Seed some starting borrow records to match the user's list
// Let's create dates relative to "now" (2026-05-25) to trigger overdue values
const getPastDate = (daysAgo) => {
  const d = new Date("2026-05-25T14:07:00");
  d.setDate(d.getDate() - daysAgo);
  return d.toISOString().split('T')[0];
};

const getDueDate = (daysAgoStart) => {
  const d = new Date("2026-05-25T14:07:00");
  d.setDate(d.getDate() - daysAgoStart + 14); // 14-day borrowing window
  return d.toISOString().split('T')[0];
};

const DEFAULT_LOANS = [
  // ST001 - Python Programming Basics - Submitted
  { studentId: "ST001", bookId: "B001", borrowDate: getPastDate(20), dueDate: getDueDate(20), returnDate: getPastDate(6), status: "Submitted" },
  // ST002 - Operating Systems Concepts - Not Submitted (Overdue by 4 days)
  { studentId: "ST002", bookId: "B007", borrowDate: getPastDate(18), dueDate: getDueDate(18), returnDate: null, status: "Not Submitted" },
  // ST003 - Java Fundamentals - Submitted
  { studentId: "ST003", bookId: "B003", borrowDate: getPastDate(10), dueDate: getDueDate(10), returnDate: getPastDate(2), status: "Submitted" },
  // ST004 - Database Management Systems - Not Submitted (Active, not overdue yet)
  { studentId: "ST004", bookId: "B006", borrowDate: getPastDate(5), dueDate: getDueDate(5), returnDate: null, status: "Not Submitted" },
  // ST005 - Machine Learning Intro - Submitted
  { studentId: "ST005", bookId: "B009", borrowDate: getPastDate(15), dueDate: getDueDate(15), returnDate: getPastDate(1), status: "Submitted" },
  // ST006 - Computer Networks - Not Submitted (Overdue by 6 days)
  { studentId: "ST006", bookId: "B005", borrowDate: getPastDate(20), dueDate: getDueDate(20), returnDate: null, status: "Not Submitted" },
  // ST007 - Cyber Security Basics - Submitted
  { studentId: "ST007", bookId: "B013", borrowDate: getPastDate(12), dueDate: getDueDate(12), returnDate: getPastDate(4), status: "Submitted" },
  // ST008 - Web Development Essentials - Not Submitted (Active, not overdue yet)
  { studentId: "ST008", bookId: "B008", borrowDate: getPastDate(8), dueDate: getDueDate(8), returnDate: null, status: "Not Submitted" },
  // ST009 - Software Engineering - Submitted
  { studentId: "ST009", bookId: "B014", borrowDate: getPastDate(14), dueDate: getDueDate(14), returnDate: getPastDate(3), status: "Submitted" },
  // ST010 - Cloud Computing - Not Submitted (Overdue by 11 days)
  { studentId: "ST010", bookId: "B010", borrowDate: getPastDate(25), dueDate: getDueDate(25), returnDate: null, status: "Not Submitted" },
  // bala - Data Structures Using C - Not Submitted (Active loan for My Library demo)
  { studentId: "bala", bookId: "B002", borrowDate: getPastDate(10), dueDate: getDueDate(10), returnDate: null, status: "Not Submitted" },
  // bala - Python Programming Basics - Submitted (Returned loan for My Library demo)
  { studentId: "bala", bookId: "B001", borrowDate: getPastDate(25), dueDate: getDueDate(25), returnDate: getPastDate(12), status: "Submitted" }
];

const DEFAULT_LOGS = [
  { time: "2026-05-25T09:00:00", text: "Database initial seed complete. Loaded 25 books and 10 students.", type: "success" },
  { time: "2026-05-25T09:15:22", text: "Admin configured global borrowing window parameter to 14 days.", type: "info" }
];

const DEFAULT_NOTIFICATIONS = [
  { id: 1, text: "Welcome to GTN Library system! You are logged in as administrator.", time: "10 mins ago", type: "success", unread: true },
  { id: 2, text: "Attention: 3 students have overdue library submissions.", time: "1 hr ago", type: "warning", unread: true }
];

// ==========================================================================
// STATE MANAGEMENT & CONTROLLERS
// ==========================================================================
let books = [];
let users = [];
let loans = [];
let logs = [];
let notifications = [];
let requests = [];
let bookmarks = [];
let soundEnabled = true;
let showBookmarksOnly = false;
let currentLang = 'en';
let currentUser = null;
let currentRole = 'admin'; // 'admin' or 'student'
let inactivityTimer = null;
let autoLogoutMinutes = 10; // defaults to 10 minutes

// Launcher state variables
let launcherCategory = 'reading';
let libReadingStatus = [];
let libLastOpened = null;
let libReadingHistory = [];

// DOM Elements cache
const appContainer = document.getElementById("app-container");
const loginScreen = document.getElementById("login-screen");
const mainPortal = document.getElementById("main-portal");

// Initial Startup
window.addEventListener("DOMContentLoaded", () => {
  initDatabase();
  loadSession();
  setupEventListeners();
  updateTimeDisplay();
  setInterval(updateTimeDisplay, 60000);
});

// Setup Dynamic Events for auto-logout
function setupEventListeners() {
  // Activity tracking for auto-logout
  const activityEvents = ['mousemove', 'keypress', 'click', 'scroll', 'touchstart'];
  activityEvents.forEach(evt => {
    window.addEventListener(evt, resetInactivityTimeout);
  });

  // Global overlay modal closings and click outside logic
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      e.target.classList.remove("active");
    }

    // 1. Language Menu outside click
    const langBtn = document.getElementById("lang-btn");
    const langMenu = document.getElementById("lang-menu");
    if (langMenu && langMenu.classList.contains("active")) {
      if (langBtn && !langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("active");
      }
    }

    // 2. Notifications dropdown outside click
    const bellBtn = document.getElementById("notifications-bell");
    const notificationsDropdown = document.getElementById("notifications-dropdown");
    if (notificationsDropdown && notificationsDropdown.classList.contains("active")) {
      if (bellBtn && !bellBtn.contains(e.target) && !notificationsDropdown.contains(e.target)) {
        notificationsDropdown.classList.remove("active");
      }
    }

    // 3. Toasts outside click (dismiss active toasts)
    const toastContainer = document.getElementById("toast-container");
    if (toastContainer && toastContainer.children.length > 0) {
      const activeToasts = Array.from(toastContainer.querySelectorAll(".toast:not(.new-toast)"));
      if (activeToasts.length > 0 && !toastContainer.contains(e.target)) {
        toastContainer.innerHTML = '';
      }
    }
  });

  // Escape key closes active modals
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const activeModal = document.querySelector(".modal-overlay.active");
      if (activeModal) activeModal.classList.remove("active");
    }
  });
}

function initDatabase() {
  // Read or seed
  if (!localStorage.getItem("lib_books")) {
    localStorage.setItem("lib_books", JSON.stringify(DEFAULT_BOOKS));
  }
  if (!localStorage.getItem("lib_users")) {
    localStorage.setItem("lib_users", JSON.stringify(DEFAULT_USERS));
  }
  if (!localStorage.getItem("lib_loans")) {
    localStorage.setItem("lib_loans", JSON.stringify(DEFAULT_LOANS));
  }
  if (!localStorage.getItem("lib_logs")) {
    localStorage.setItem("lib_logs", JSON.stringify(DEFAULT_LOGS));
  }
  if (!localStorage.getItem("lib_notifications")) {
    localStorage.setItem("lib_notifications", JSON.stringify(DEFAULT_NOTIFICATIONS));
  }

  // Seed default requests
  const DEFAULT_REQUESTS = [
    { id: "REQ001", studentId: "ST002", bookId: "B001", requestDate: "2026-05-24", type: "Request", status: "Pending" },
    { id: "REQ002", studentId: "ST003", bookId: "B003", requestDate: "2026-05-25", type: "Reserve", status: "Pending" },
    { id: "REQ_BALA", studentId: "bala", bookId: "B003", requestDate: getPastDate(1), type: "Request", status: "Pending" }
  ];
  if (!localStorage.getItem("lib_requests")) {
    localStorage.setItem("lib_requests", JSON.stringify(DEFAULT_REQUESTS));
  }

  books = JSON.parse(localStorage.getItem("lib_books"));
  users = JSON.parse(localStorage.getItem("lib_users"));
  // Migrate default users and ensure all student passwords are "2006"
  let migrated = false;
  users.forEach(u => {
    if (u.id.toLowerCase() !== 'admin' && u.password === "student123") {
      u.password = "2006";
      migrated = true;
    }
  });
  if (!users.some(u => u.id.toLowerCase() === 'bala')) {
    users.push({ id: "bala", name: "Bala", password: "2006" });
    migrated = true;
  }
  if (migrated) {
    localStorage.setItem("lib_users", JSON.stringify(users));
  }
  loans = JSON.parse(localStorage.getItem("lib_loans"));
  logs = JSON.parse(localStorage.getItem("lib_logs"));
  notifications = JSON.parse(localStorage.getItem("lib_notifications"));
  requests = JSON.parse(localStorage.getItem("lib_requests"));

  // Load launcher state variables
  libReadingStatus = JSON.parse(localStorage.getItem("lib_reading_status")) || [];
  libLastOpened = localStorage.getItem("lib_last_opened") || null;
  libReadingHistory = JSON.parse(localStorage.getItem("lib_reading_history")) || [];

  // Check Settings Configuration
  currentLang = localStorage.getItem("lib_setting_lang") || 'en';
  document.getElementById("settings-language-select").value = currentLang;
  
  const theme = localStorage.getItem("lib_setting_theme") || 'dark';
  if (theme === 'light') {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  }

  const themePalette = localStorage.getItem("lib_setting_theme_palette") || "indigo";
  setThemeAccent(themePalette);

  const buttonStyle = localStorage.getItem("lib_setting_button_style") || "glow";
  setButtonCombination(buttonStyle);

  const fontSize = localStorage.getItem("lib_setting_font_size") || "font-md";
  setFontSizeScale(fontSize);

  const notificationsState = localStorage.getItem("lib_setting_notifications") !== 'false';
  document.getElementById("settings-notifications-toggle").checked = notificationsState;

  soundEnabled = localStorage.getItem("lib_setting_sound") !== "false";
  document.getElementById("settings-sound-toggle").checked = soundEnabled;

  autoLogoutMinutes = parseInt(localStorage.getItem("lib_setting_auto_logout") || "10", 10);
  document.getElementById("settings-auto-logout-select").value = autoLogoutMinutes;
}

function saveLauncherState() {
  localStorage.setItem("lib_reading_status", JSON.stringify(libReadingStatus));
  if (libLastOpened) {
    localStorage.setItem("lib_last_opened", libLastOpened);
  } else {
    localStorage.removeItem("lib_last_opened");
  }
  localStorage.setItem("lib_reading_history", JSON.stringify(libReadingHistory));
}

function saveDatabase() {
  localStorage.setItem("lib_books", JSON.stringify(books));
  localStorage.setItem("lib_users", JSON.stringify(users));
  localStorage.setItem("lib_loans", JSON.stringify(loans));
  localStorage.setItem("lib_logs", JSON.stringify(logs));
  localStorage.setItem("lib_notifications", JSON.stringify(notifications));
  localStorage.setItem("lib_requests", JSON.stringify(requests));
  saveLauncherState();
}

function loadSession() {
  const session = localStorage.getItem("lib_session");
  if (session) {
    const data = JSON.parse(session);
    currentUser = data.user;
    currentRole = data.role;
    
    // Load bookmarks for ALL users (admin and student)
    bookmarks = JSON.parse(localStorage.getItem(`lib_bookmarks_${currentUser.id}`)) || [];

    // Set UI Role Class
    document.body.className = document.body.className.replace(/role-\w+/g, '') + ' role-' + currentRole;
    
    // Set Portal display names
    document.getElementById("portal-user-name").innerText = currentRole === 'admin' ? "Administrator" : currentUser.name;
    document.getElementById("portal-user-role-badge").innerText = currentRole === 'admin' ? "Admin" : "Student";
    document.getElementById("portal-user-role-badge").className = `profile-role badge badge-${currentRole}`;
    
    // Init Initials
    const initials = currentRole === 'admin' ? "AD" : currentUser.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
    document.getElementById("user-avatar-initials").innerText = initials;

    appContainer.classList.remove("login-mode");
    loginScreen.classList.remove("active");
    switchView("dashboard-view");
    
    // Start inactive monitoring
    resetInactivityTimeout();
    addActivityLog(`${currentRole === 'admin' ? 'Admin' : currentUser.name} restored active session.`, "info");
  } else {
    appContainer.classList.add("login-mode");
  }
  applyTranslations();
  rebuildNotifications();
}

// ==========================================================================
// TRANSLATION CONTROLLER
// ==========================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lib_setting_lang", lang);
  document.getElementById("settings-language-select").value = lang;
  
  // Update Dropdown text indicator
  document.querySelector("#lang-btn span").innerText = lang.toUpperCase();
  
  // Close menu
  document.getElementById("lang-menu").classList.remove("active");
  
  applyTranslations();
  
  // Refresh grids to match categories translations
  if (!appContainer.classList.contains("login-mode")) {
    renderDashboard();
    renderBooksGrid();
    renderLoansTable();
    renderUsersTable();
  }
}

function toggleLanguageSelector() {
  document.getElementById("lang-menu").classList.toggle("active");
}

function applyTranslations() {
  const dict = translations[currentLang];
  
  // Dynamic attribute translator
  document.querySelectorAll("[data-translate]").forEach(elem => {
    const key = elem.getAttribute("data-translate");
    if (dict[key]) {
      // Check if element contains icon element, preserve it!
      const icon = elem.querySelector("i-lucide, svg");
      if (icon) {
        elem.innerHTML = '';
        elem.appendChild(icon);
        elem.appendChild(document.createTextNode(" " + dict[key]));
      } else {
        elem.innerText = dict[key];
      }
    }
  });

  // Placeholder translator
  document.querySelectorAll("[data-translate-placeholder]").forEach(elem => {
    const key = elem.getAttribute("data-translate-placeholder");
    if (dict[key]) {
      elem.setAttribute("placeholder", dict[key]);
    }
  });

  // Title changes
  document.title = "GTN Library - " + dict.dashboard_title;
  lucide.createIcons();
}

// ==========================================================================
// ROUTING / VIEW SWITCHER
// ==========================================================================
function switchView(viewId) {
  // Reset window and content panel scroll positions to the top
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  const contentPanel = document.querySelector(".content-panel");
  if (contentPanel) contentPanel.scrollTop = 0;

  // Remove active from all nav links
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("data-view") === viewId) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Show selected screen
  document.querySelectorAll(".portal-screen").forEach(screen => {
    if (screen.id === viewId) {
      screen.classList.add("active");
    } else {
      screen.classList.remove("active");
    }
  });

  // Set header screen title
  const dict = translations[currentLang];
  let screenTitleKey = "dashboard_title";
  if (viewId === "books-view") screenTitleKey = "nav_books";
  if (viewId === "borrow-view") screenTitleKey = "nav_borrow";
  if (viewId === "users-view") screenTitleKey = "nav_users";
  if (viewId === "settings-view") screenTitleKey = "nav_settings";
  
  document.getElementById("screen-title").setAttribute("data-translate", screenTitleKey);
  document.getElementById("screen-title").innerText = dict[screenTitleKey];

  // Auto-dismiss open dropdown panels and clear toasts on switching view
  const langMenu = document.getElementById("lang-menu");
  if (langMenu) langMenu.classList.remove("active");
  const notificationsDropdown = document.getElementById("notifications-dropdown");
  if (notificationsDropdown) notificationsDropdown.classList.remove("active");
  const toastContainer = document.getElementById("toast-container");
  if (toastContainer) toastContainer.innerHTML = "";

  // Refresh data on loading
  if (viewId === "dashboard-view") renderDashboard();
  if (viewId === "books-view") renderBooksGrid();
  if (viewId === "borrow-view") {
    renderLoansTable();
    populateSelectOptions();
    if (currentRole === 'admin') {
      renderApprovalsQueue();
    } else {
      setLauncherCategory(launcherCategory, null);
    }
  }
  if (viewId === "users-view") renderUsersTable();
  if (viewId === "settings-view") {
    renderSettingsLogs();
    // Preset profile form
    if (currentRole === 'admin') {
      document.getElementById("profile-form-name").value = localStorage.getItem("lib_admin_name") || "Administrator";
    } else {
      document.getElementById("profile-form-name").value = currentUser.name;
    }
  }

  // Close mobile sidebar
  toggleSidebar(false);
  
  lucide.createIcons();
}

function toggleSidebar(open) {
  const sidebar = document.querySelector(".sidebar");
  if (open) sidebar.classList.add("active");
  else sidebar.classList.remove("active");
}

// ==========================================================================
// THEME & SETTINGS
// ==========================================================================
function toggleTheme() {
  const isLight = document.body.classList.contains("light-theme");
  if (isLight) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("lib_setting_theme", "dark");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("lib_setting_theme", "light");
  }
}

function toggleNotificationsState(enabled) {
  localStorage.setItem("lib_setting_notifications", enabled ? "true" : "false");
}

function updateAutoLogoutSetting(mins) {
  autoLogoutMinutes = parseInt(mins, 10);
  localStorage.setItem("lib_setting_auto_logout", mins);
  resetInactivityTimeout();
}

// Auto Logout monitoring daemon
function resetInactivityTimeout() {
  if (inactivityTimer) clearTimeout(inactivityTimer);
  
  if (autoLogoutMinutes === 0 || !currentUser) return; // Never logout

  inactivityTimer = setTimeout(() => {
    handleAutoLogout();
  }, autoLogoutMinutes * 60 * 1000);
}

function handleAutoLogout() {
  addActivityLog("Session auto logged out due to inactivity.", "warning");
  performLogout();
  showToast("toast_autologout", "error");
}

// ==========================================================================
// AUTHENTICATION LOGIC
// ==========================================================================
function handleLogin() {
  const role = document.querySelector('input[name="login-role"]:checked').value;
  const usernameInput = document.getElementById("login-username").value.trim();
  const passwordInput = document.getElementById("login-password").value.trim();
  const remember = document.getElementById("login-remember").checked;

  let authenticated = false;
  let userObject = null;

  if (role === "admin") {
    if (usernameInput === "admin" && passwordInput === "admin123") {
      authenticated = true;
      userObject = { id: "admin", name: "Administrator" };
    }
  } else {
    // Student Authentication
    const found = users.find(u => u.id.toLowerCase() === usernameInput.toLowerCase() && u.password === passwordInput);
    if (found) {
      authenticated = true;
      userObject = found;
    }
  }

  if (authenticated) {
    currentUser = userObject;
    currentRole = role;

    // Load bookmarks for ALL users
    bookmarks = JSON.parse(localStorage.getItem(`lib_bookmarks_${currentUser.id}`)) || [];

    // Reset bookmarks filter
    showBookmarksOnly = false;
    const bookmarkBtn = document.getElementById("btn-show-bookmarks");
    if (bookmarkBtn) {
      bookmarkBtn.classList.remove("btn-bookmark-active");
      bookmarkBtn.querySelector("span").innerText = currentLang === 'en' ? "Bookmarks" : "புத்தகக்குறிகள்";
    }

    // Cache session
    const sessionData = { user: userObject, role: role, remember: remember };
    localStorage.setItem("lib_session", JSON.stringify(sessionData));

    // Clear login form inputs
    document.getElementById("login-username").value = "";
    document.getElementById("login-password").value = "";

    // Trigger Book Page Flip Animation!
    const loginCard = document.querySelector(".login-card");
    
    // Setup dashboard ready in background
    appContainer.classList.add("transitioning");
    currentLang = localStorage.getItem("lib_setting_lang") || 'en';
    document.body.className = document.body.className.replace(/role-\w+/g, '') + ' role-' + currentRole;
    document.getElementById("portal-user-name").innerText = currentRole === 'admin' ? "Administrator" : currentUser.name;
    document.getElementById("portal-user-role-badge").innerText = currentRole === 'admin' ? "Admin" : "Student";
    document.getElementById("portal-user-role-badge").className = `profile-role badge badge-${currentRole}`;
    
    const initials = currentRole === 'admin' ? "AD" : currentUser.name.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
    document.getElementById("user-avatar-initials").innerText = initials;
    
    applyTranslations();
    rebuildNotifications();
    renderDashboard();
    
    // Add classes to animate card flip
    loginCard.classList.add("page-flipped");

    setTimeout(() => {
      // Complete transition
      appContainer.classList.remove("transitioning");
      appContainer.classList.remove("login-mode");
      loginCard.classList.remove("page-flipped");
      loginScreen.classList.remove("active");
      switchView("dashboard-view");
      
      resetInactivityTimeout();
      addActivityLog(`${currentRole === 'admin' ? 'Admin' : currentUser.name} successfully signed in.`, "success");
      showToast("toast_login_success", "success");
      addNotification(`Signed in at ${new Date().toLocaleTimeString()}`, "info", currentRole === 'student' ? currentUser.id : null);
    }, 800);
  } else {
    showToast("toast_login_fail", "error");
    addActivityLog(`Failed login attempt for user: ${usernameInput} (Role: ${role})`, "warning");
  }
}

function showLogoutConfirmation() {
  const dict = translations[currentLang];
  showConfirmModal(
    dict.logout_btn + "?", 
    currentLang === 'en' ? "Are you sure you want to log out safely?" : "நீங்கள் பாதுகாப்பாக வெளியேற விரும்புகிறீர்களா?",
    () => {
      addActivityLog(`${currentRole === 'admin' ? 'Admin' : currentUser.name} logged out.`, "info");
      performLogout();
      showToast("toast_logout", "success");
    }
  );
}

function performLogout() {
  currentUser = null;
  localStorage.removeItem("lib_session");
  if (inactivityTimer) clearTimeout(inactivityTimer);

  appContainer.classList.add("login-mode");
  
  document.querySelectorAll(".portal-screen").forEach(s => s.classList.remove("active"));
  document.getElementById("login-screen").classList.add("active");
  applyTranslations();
}

function handleForgotPassword(e) {
  e.preventDefault();
  alert(currentLang === 'en' 
    ? "Demo mode: Please contact the System Administrator to reset your credentials. Default admin pass is admin123." 
    : "டெமோ பயன்முறை: உங்கள் நற்சான்றிதழ்களை மீட்டமைக்க கணினி நிர்வாகியைத் தொடர்பு கொள்ளவும்.");
}

function togglePasswordVisibility(fieldId, btn) {
  const input = document.getElementById(fieldId);
  const icon = btn.querySelector("svg, i-lucide");
  if (input.type === "password") {
    input.type = "text";
    icon.setAttribute("name", "eye");
  } else {
    input.type = "password";
    icon.setAttribute("name", "eye-off");
  }
  lucide.createIcons();
}

// ==========================================================================
// DASHBOARD STATS COMPUTATION & RENDERS
// ==========================================================================
function renderDashboard() {
  if (currentRole === 'student') {
    renderStudentDashboard();
  } else {
    renderAdminDashboard();
  }
}

function renderAdminDashboard() {
  const dict = translations[currentLang];

  // Calculations
  const totalBooksCount = books.reduce((acc, curr) => acc + parseInt(curr.qty, 10), 0);
  const availableBooksTitles = books.filter(b => b.qty > 0).length;
  
  const activeLoans = loans.filter(l => l.status === "Not Submitted");
  const booksBorrowedCount = activeLoans.length;
  const booksReturnedCount = loans.filter(l => l.status === "Submitted").length;
  
  // Calculate overdue submissions (dueDate < now and status === 'Not Submitted')
  const today = new Date("2026-05-25T14:07:00");
  const overdueLoans = activeLoans.filter(l => new Date(l.dueDate) < today);
  const pendingDefaultersCount = overdueLoans.length;

  // Render metrics
  document.getElementById("stat-total-books").innerText = totalBooksCount;
  document.getElementById("stat-avail-books").innerText = availableBooksTitles;
  document.getElementById("stat-borrowed-books").innerText = booksBorrowedCount;
  document.getElementById("stat-returned-books").innerText = booksReturnedCount;
  document.getElementById("stat-pending-users").innerText = pendingDefaultersCount;

  // Add Total Students and Daily Activity
  document.getElementById("stat-total-students").innerText = users.length;
  const todayStr = "2026-05-25";
  const dailyLoans = loans.filter(l => l.borrowDate === todayStr).length;
  const dailyRequests = requests.filter(r => r.requestDate === todayStr).length;
  document.getElementById("stat-daily-activity").innerText = dailyLoans + dailyRequests;

  // Render pending submissions list table
  const tbody = document.getElementById("dashboard-pending-table-body");
  tbody.innerHTML = "";

  if (overdueLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 20px;">${currentLang === 'en' ? 'No pending overdue submissions found!' : 'நிலுவையில் உள்ள தாமதமான ஒப்படைப்புகள் எதுவும் இல்லை!'}</td></tr>`;
  } else {
    overdueLoans.forEach(loan => {
      const student = users.find(u => u.id === loan.studentId) || { name: loan.studentId };
      const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
      
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="code-font">${loan.studentId}</td>
        <td><strong>${student.name}</strong></td>
        <td>${book.name}</td>
        <td class="code-font text-danger">${formatDate(loan.dueDate)}</td>
        <td><span class="badge badge-danger">${currentLang === 'en' ? 'Overdue' : 'தாமதம்'}</span></td>
      `;
      tbody.appendChild(tr);
    });
  }

  // Render recent timeline activity logs (last 5)
  const timeline = document.getElementById("dashboard-activity-timeline");
  timeline.innerHTML = "";
  
  const recentLogs = logs.slice(-5).reverse();
  recentLogs.forEach((log, idx) => {
    const node = document.createElement("div");
    node.className = `activity-node ${idx === 0 ? 'active' : ''}`;
    node.innerHTML = `
      <div class="activity-desc">${log.text}</div>
      <div class="activity-time">${formatTimeAgo(log.time)}</div>
    `;
    timeline.appendChild(node);
  });
}

// ==========================================================================
// BOOKS CATALOG MANAGEMENT
// ==========================================================================
function renderBooksGrid() {
  const container = document.getElementById("books-grid-container");
  container.innerHTML = "";

  const catFilter = document.getElementById("book-category-filter").value;
  const statusFilter = document.getElementById("book-status-filter").value;
  const query = document.getElementById("book-search-input").value.toLowerCase().trim();

  let filtered = books;

  // Apply filters
  if (catFilter !== "all") {
    filtered = filtered.filter(b => b.category === catFilter);
  }
  if (statusFilter !== "all") {
    if (statusFilter === "available") {
      filtered = filtered.filter(b => b.qty > 0);
    } else {
      filtered = filtered.filter(b => b.qty === 0);
    }
  }
  if (query !== "") {
    filtered = filtered.filter(b => 
      b.id.toLowerCase().includes(query) ||
      b.name.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query)
    );
  }

  // Apply Bookmarks filter (available for both admin and student)
  if (showBookmarksOnly) {
    filtered = filtered.filter(b => bookmarks.includes(b.id));
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="glass-panel" style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">${currentLang === 'en' ? 'No matching books found in catalog.' : 'பட்டியலில் பொருத்தமான புத்தகங்கள் எதுவும் இல்லை.'}</div>`;
    return;
  }

  filtered.forEach(book => {
    const isAvail = book.qty > 0;
    const card = document.createElement("div");
    
    // Add stock level indicator classes
    let stockClass = "";
    if (book.qty === 0) {
      stockClass = "out-of-stock";
    } else if (book.qty <= 2) {
      stockClass = "low-stock";
    }
    card.className = `book-card glass-panel ${stockClass}`;
    
    // Cover customization styling
    const coverBgStyle = `background: linear-gradient(135deg, ${book.color || '#6366f1'} 0%, rgba(15,23,42,0.6) 100%)`;
    
    card.innerHTML = `
      <div class="book-card-header">
        <div class="book-cover-thumbnail" style="${coverBgStyle}">
          <div class="cover-logo-wrapper-mini" style="opacity: 0.18; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 1; color: #ffffff;">
            ${getCategoryIconSVG(book.category, 32)}
          </div>
          <span class="code" style="position: relative; z-index: 2;">${book.id}</span>
          <span class="title" style="position: relative; z-index: 2;">${book.name}</span>
        </div>
        <div class="book-card-details">
          <h3>${book.name}</h3>
          <p class="author">${book.author}</p>
          <span class="badge ${isAvail ? 'badge-success' : 'badge-danger'}">
            ${isAvail ? (currentLang === 'en' ? 'Available' : 'கிடைக்கும்') : (currentLang === 'en' ? 'Issued Out' : 'இரவல் போயுள்ளது')}
          </span>
          ${book.qty > 0 && book.qty <= 2 ? `<br><span class="badge badge-warning" style="margin-top:4px; font-size:0.65rem;">${currentLang === 'en' ? 'Low Stock' : 'குறைந்த கையிருப்பு'}</span>` : ''}
        </div>
      </div>
      
      <div class="book-meta-inline">
        <div class="meta-item">
          <i-lucide name="tag"></i-lucide>
          <span>${translateCategory(book.category)}</span>
        </div>
        <div class="meta-item">
          <i-lucide name="package"></i-lucide>
          <span>${currentLang === 'en' ? 'Quantity' : 'அளவு'}: <strong>${book.qty}</strong></span>
        </div>
        <div class="meta-item">
          <i-lucide name="map-pin"></i-lucide>
          <span>${book.shelf}</span>
        </div>
      </div>

      <div class="book-card-actions">
        <button class="btn btn-glass-info btn-sm" onclick="showBookDetails('${book.id}')">
          <i-lucide name="eye"></i-lucide>
          <span>${currentLang === 'en' ? 'Details' : 'விவரம்'}</span>
        </button>
        
        ${currentRole === 'admin' ? `
          ${isAvail ? `
            <button class="btn btn-glass-success btn-sm" onclick="switchView('borrow-view'); setTimeout(()=>{document.getElementById('issue-book-select').value='${book.id}'; updateExpectedReturnDate();},80); playAudioTone('click')">
              <i-lucide name="check-circle"></i-lucide>
              <span>${currentLang === 'en' ? 'Issue' : 'வழங்கு'}</span>
            </button>

          ` : `
            <button class="btn btn-glass-warning btn-sm" disabled style="opacity:0.5;cursor:not-allowed;">
              <i-lucide name="ban"></i-lucide>
              <span>${currentLang === 'en' ? 'Issued Out' : 'இரவல்'}</span>
            </button>
          `}
          <button class="btn btn-glass-edit btn-sm" onclick="showEditBookModal('${book.id}'); playAudioTone('click')">
            <i-lucide name="edit-3"></i-lucide>
            <span>${currentLang === 'en' ? 'Edit' : 'திருத்து'}</span>
          </button>
          <button class="btn btn-glass-delete btn-sm" onclick="deleteBookConfirm('${book.id}'); playAudioTone('click')">
            <i-lucide name="trash-2"></i-lucide>
            <span>${currentLang === 'en' ? 'Delete' : 'நீக்கு'}</span>
          </button>
        ` : `
          ${isAvail ? `
            <button class="btn btn-glass-success btn-sm" onclick="requestBookStudent('${book.id}', 'Request')">
              <i-lucide name="git-pull-request"></i-lucide>
              <span>${currentLang === 'en' ? 'Request' : 'கோரிக்கை'}</span>
            </button>
          ` : `
            <button class="btn btn-glass-warning btn-sm" onclick="requestBookStudent('${book.id}', 'Reserve')">
              <i-lucide name="calendar"></i-lucide>
              <span>${currentLang === 'en' ? 'Reserve' : 'முன்பதிவு'}</span>
            </button>
          `}
        `}
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

function filterBooks() {
  renderBooksGrid();
}

function translateCategory(cat) {
  const dict = translations[currentLang];
  if (cat === "Computer Science") return dict.opt_cs;
  if (cat === "Mathematics") return dict.opt_maths;
  if (cat === "Tamil Literature") return dict.opt_tamil;
  if (cat === "Electronics") return dict.opt_electronics;
  if (cat === "Design") return dict.opt_design;
  return cat;
}

// Book detail card popup modal
let detailsModalBookId = null;
function showBookDetails(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  detailsModalBookId = bookId;
  const isAvail = book.qty > 0;
  
  document.getElementById("details-book-name").innerText = book.name;
  document.getElementById("details-book-id").innerText = book.id;
  document.getElementById("details-book-author").innerText = book.author;
  document.getElementById("details-book-category").innerText = translateCategory(book.category);
  document.getElementById("details-book-isbn").innerText = book.isbn;
  document.getElementById("details-book-pubdate").innerText = formatDate(book.pubDate);
  document.getElementById("details-book-shelf").innerText = book.shelf;
  document.getElementById("details-book-qty").innerText = `${book.qty} ${currentLang === 'en' ? 'Available in inventory' : 'கையிருப்பில் உள்ளது'}`;

  // 3D cover styles
  const coverInner = document.getElementById("details-cover-inner");
  coverInner.style.background = `linear-gradient(135deg, ${book.color || '#6366f1'} 0%, rgba(15,23,42,0.85) 100%)`;
  coverInner.style.position = "relative";
  coverInner.innerHTML = `
    <div class="cover-logo-wrapper-mini" style="opacity: 0.18; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 1; color: #ffffff;">
      ${getCategoryIconSVG(book.category, 72)}
    </div>
    <span class="cover-title" id="details-cover-title" style="position: relative; z-index: 2;">${book.name}</span>
    <span class="cover-author" id="details-cover-author" style="position: relative; z-index: 2;">${book.author}</span>
  `;

  const badge = document.getElementById("details-book-status-badge");
  badge.className = `badge ${isAvail ? 'badge-success' : 'badge-danger'}`;
  badge.innerText = isAvail ? (currentLang === 'en' ? 'Available' : 'கிடைக்கும்') : (currentLang === 'en' ? 'Issued Out' : 'இரவல் போயுள்ளது');

  // Show/Hide Borrow/Request button depending on role & availability
  const borrowBtn = document.getElementById("details-borrow-action-btn");
  if (currentRole === 'admin') {
    if (isAvail) {
      borrowBtn.style.display = "inline-flex";
      borrowBtn.innerText = currentLang === 'en' ? 'Issue Book' : 'வழங்கு';
    } else {
      borrowBtn.style.display = "none";
    }
  } else {
    borrowBtn.style.display = "inline-flex";
    if (isAvail) {
      borrowBtn.innerText = currentLang === 'en' ? 'Request Book' : 'புத்தகம் கோரவும்';
    } else {
      borrowBtn.innerText = currentLang === 'en' ? 'Reserve Book' : 'புத்தகம் முன்பதிவு செய்';
    }
  }

  // Bookmark button state in modal (students only)
  const modalBookmarkBtn = document.getElementById("details-bookmark-btn");
  if (modalBookmarkBtn) {
    if (currentRole === 'student') {
      modalBookmarkBtn.style.display = "inline-flex";
      const isBookmarked = bookmarks.includes(bookId);
      modalBookmarkBtn.className = `btn btn-sm ${isBookmarked ? 'btn-glass-amber bookmarked' : 'btn-glass-info'}`;
      modalBookmarkBtn.onclick = () => { toggleBookmark(bookId); playAudioTone('click'); };
      modalBookmarkBtn.innerHTML = `<i-lucide name="${isBookmarked ? 'bookmark-check' : 'bookmark'}" style="width:16px;height:16px;"></i-lucide> <span>${isBookmarked ? (currentLang === 'en' ? '\u2714 Bookmarked' : '\u2714 புக்மார்க்') : (currentLang === 'en' ? 'Bookmark' : 'புக்மார்க்')}</span>`;
      lucide.createIcons();
    } else {
      modalBookmarkBtn.style.display = "none";
    }
  }

  openModal("book-details-modal");
}

function triggerBorrowFromDetails() {
  closeModal("book-details-modal");
  if (currentRole === 'admin') {
    // Route admin to issue book view and set select option
    switchView("borrow-view");
    setTimeout(() => {
      document.getElementById("issue-book-select").value = detailsModalBookId;
      updateExpectedReturnDate();
    }, 50);
  } else {
    // Request/Reserve for student
    const book = books.find(b => b.id === detailsModalBookId);
    if (book) {
      const type = book.qty > 0 ? "Request" : "Reserve";
      requestBookStudent(detailsModalBookId, type);
    }
  }
}

function quickBorrowStudent(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book || book.qty <= 0) return;

  const todayStr = new Date("2026-05-25").toISOString().split('T')[0];
  const due = getDueDate(0); // 14 days standard return duration

  const newLoan = {
    studentId: currentUser.id,
    bookId: book.id,
    borrowDate: todayStr,
    dueDate: due,
    returnDate: null,
    status: "Not Submitted"
  };

  loans.push(newLoan);
  book.qty--;
  
  saveDatabase();
  addActivityLog(`${currentUser.name} borrowed "${book.name}".`, "success");
  addNotification(`${currentUser.name} successfully borrowed ${book.name}.`, "info");
  
  showToast("toast_issue_success", "success");
  renderBooksGrid();
}

// Add/Edit Book form submissions
function showAddBookModal() {
  document.getElementById("book-modal-title").innerText = translations[currentLang].add_book_modal_title;
  document.getElementById("book-form-action").value = "create";
  document.getElementById("book-edit-form").reset();
  document.getElementById("book-form-id").disabled = false;
  
  // Set default current date
  document.getElementById("book-form-pubdate").value = new Date("2026-05-25").toISOString().split('T')[0];
  
  openModal("book-form-modal");
}

function showEditBookModal(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  document.getElementById("book-modal-title").innerText = translations[currentLang].edit_book_modal_title;
  document.getElementById("book-form-action").value = "edit";
  
  document.getElementById("book-form-id").value = book.id;
  document.getElementById("book-form-id").disabled = true;
  document.getElementById("book-form-name").value = book.name;
  document.getElementById("book-form-author").value = book.author;
  document.getElementById("book-form-category").value = book.category;
  document.getElementById("book-form-isbn").value = book.isbn;
  document.getElementById("book-form-pubdate").value = book.pubDate;
  document.getElementById("book-form-qty").value = book.qty;
  document.getElementById("book-form-shelf").value = book.shelf;

  openModal("book-form-modal");
}

function saveBookForm() {
  const action = document.getElementById("book-form-action").value;
  const id = document.getElementById("book-form-id").value.trim().toUpperCase();
  const name = document.getElementById("book-form-name").value.trim();
  const author = document.getElementById("book-form-author").value.trim();
  const category = document.getElementById("book-form-category").value;
  const isbn = document.getElementById("book-form-isbn").value.trim();
  const pubDate = document.getElementById("book-form-pubdate").value;
  const qty = parseInt(document.getElementById("book-form-qty").value, 10);
  const shelf = document.getElementById("book-form-shelf").value.trim();

  // Vibrant color generation list
  const palette = ["#6366f1", "#a855f7", "#ec4899", "#f43f5e", "#3b82f6", "#06b6d4", "#14b8a6", "#10b981", "#84cc16", "#eab308", "#f97316", "#ef4444"];
  const randColor = palette[Math.floor(Math.random() * palette.length)];

  if (action === "create") {
    // Check duplication
    if (books.find(b => b.id.toLowerCase() === id.toLowerCase())) {
      alert("Error: Book with this ID already exists!");
      return;
    }
    const newBook = { id, name, author, category, isbn, pubDate, qty, shelf, color: randColor };
    books.push(newBook);
    addActivityLog(`Added new book "${name}" (ID: ${id}).`, "success");
    showToast("toast_book_added", "success");
  } else {
    const book = books.find(b => b.id === id);
    if (book) {
      book.name = name;
      book.author = author;
      book.category = category;
      book.isbn = isbn;
      book.pubDate = pubDate;
      book.qty = qty;
      book.shelf = shelf;
      addActivityLog(`Updated details for book "${name}" (ID: ${id}).`, "info");
      showToast("toast_book_updated", "success");
    }
  }

  saveDatabase();
  closeModal("book-form-modal");
  renderBooksGrid();
}

function deleteBookConfirm(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  const dict = translations[currentLang];
  showConfirmModal(
    currentLang === 'en' ? "Delete Book?" : "புத்தகத்தை நீக்கலாமா?",
    currentLang === 'en' ? `Are you sure you want to delete "${book.name}" from catalog?` : `பட்டியலில் இருந்து "${book.name}" ஐ நிச்சயமாக நீக்க வேண்டுமா?`,
    () => {
      books = books.filter(b => b.id !== bookId);
      // Remove associated active loans too? Standard library constraints usually let logs remain
      saveDatabase();
      addActivityLog(`Removed book "${book.name}" (ID: ${bookId}) from database.`, "warning");
      showToast("toast_book_deleted", "error");
      renderBooksGrid();
    }
  );
}

// ==========================================================================
// ISSUE & RETURN TRANSACTIONS
// ==========================================================================
function populateSelectOptions() {
  const studentSelect = document.getElementById("issue-student-select");
  const bookSelect = document.getElementById("issue-book-select");

  studentSelect.innerHTML = `<option value="" disabled selected>${translations[currentLang].opt_select_student}</option>`;
  bookSelect.innerHTML = `<option value="" disabled selected>${translations[currentLang].opt_select_book}</option>`;

  // Students list
  users.forEach(u => {
    studentSelect.innerHTML += `<option value="${u.id}">${u.id} - ${u.name}</option>`;
  });

  // Books available list (qty > 0)
  books.filter(b => b.qty > 0).forEach(b => {
    bookSelect.innerHTML += `<option value="${b.id}">${b.id} - ${b.name} (${b.qty})</option>`;
  });

  // Set default current date
  const today = new Date("2026-05-25");
  document.getElementById("issue-date").value = today.toISOString().split('T')[0];
  updateExpectedReturnDate();
}

function updateExpectedReturnDate() {
  const issueDateVal = document.getElementById("issue-date").value;
  if (issueDateVal) {
    const issueDate = new Date(issueDateVal);
    issueDate.setDate(issueDate.getDate() + 14); // 14 days standard duration
    document.getElementById("return-due-date").value = issueDate.toISOString().split('T')[0];
  }
}

function handleIssueBook() {
  const studId = document.getElementById("issue-student-select").value;
  const bookId = document.getElementById("issue-book-select").value;
  const issueDate = document.getElementById("issue-date").value;
  const dueDate = document.getElementById("return-due-date").value;

  const book = books.find(b => b.id === bookId);
  const student = users.find(u => u.id === studId);

  if (!book || book.qty <= 0) {
    alert("Error: Selected book is currently out of stock!");
    return;
  }

  const newLoan = {
    studentId: studId,
    bookId: bookId,
    borrowDate: issueDate,
    dueDate: dueDate,
    returnDate: null,
    status: "Not Submitted"
  };

  loans.push(newLoan);
  book.qty--;

  saveDatabase();
  addActivityLog(`Issued book "${book.name}" to student ${student.name} (${studId}).`, "success");
  showToast("toast_issue_success", "success");

  // Refresh view
  renderLoansTable();
  populateSelectOptions();
}

function renderLoansTable() {
  const tbody = document.getElementById("loans-table-body");
  tbody.innerHTML = "";

  const query = document.getElementById("loan-search-input").value.toLowerCase().trim();
  const today = new Date("2026-05-25T14:07:00");

  let activeLoans = loans.filter(l => l.status === "Not Submitted");
  
  // If student is logged in, show only their active loan records
  if (currentRole === 'student') {
    activeLoans = activeLoans.filter(l => l.studentId === currentUser.id);
    // Hide Issue Book panel layout column in UI!
    document.querySelector(".issue-module").style.display = "none";
    document.querySelector(".borrow-modules-grid").style.gridTemplateColumns = "1fr";
  } else {
    document.querySelector(".issue-module").style.display = "block";
    document.querySelector(".borrow-modules-grid").style.gridTemplateColumns = "2fr 3fr";
  }

  // Filter query
  if (query !== "") {
    activeLoans = activeLoans.filter(l => {
      const student = users.find(u => u.id === l.studentId) || { name: "" };
      const book = books.find(b => b.id === l.bookId) || { name: "" };
      return student.name.toLowerCase().includes(query) ||
             l.studentId.toLowerCase().includes(query) ||
             book.name.toLowerCase().includes(query);
    });
  }

  if (activeLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">${currentLang === 'en' ? 'No active loan transactions found.' : 'செயலில் உள்ள இரவல் பதிவுகள் எதுவும் இல்லை.'}</td></tr>`;
    return;
  }

  activeLoans.forEach(loan => {
    const student = users.find(u => u.id === loan.studentId) || { name: loan.studentId };
    const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
    const fine = calculateLateFine(loan.dueDate, today);

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <strong>${student.name}</strong><br>
        <span class="code-font" style="font-size: 0.75rem; color: var(--text-muted)">${loan.studentId}</span>
      </td>
      <td>${book.name}</td>
      <td class="code-font">${formatDate(loan.borrowDate)}</td>
      <td class="code-font ${fine > 0 ? 'text-danger' : ''}">${formatDate(loan.dueDate)}</td>
      <td class="code-font ${fine > 0 ? 'text-danger font-bold' : 'color-success'}">${fine}</td>
      <td>
        <button class="btn btn-secondary btn-sm" onclick="returnBook('${loan.studentId}', '${loan.bookId}', '${loan.borrowDate}')">
          <i-lucide name="undo-2" class="icon-sm"></i-lucide>
          <span>${currentLang === 'en' ? 'Return' : 'ஒப்படை'}</span>
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  lucide.createIcons();
}

function filterLoans() {
  renderLoansTable();
}

function calculateLateFine(dueDateStr, todayDate) {
  const due = new Date(dueDateStr);
  const diffTime = todayDate - due;
  if (diffTime <= 0) return 0;
  
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays * 5; // ₹5 per day
}

function returnBook(studentId, bookId, borrowDate) {
  // Find transaction
  const loan = loans.find(l => l.studentId === studentId && l.bookId === bookId && l.borrowDate === borrowDate && l.status === "Not Submitted");
  if (!loan) return;

  const today = new Date("2026-05-25T14:07:00");
  const todayStr = today.toISOString().split('T')[0];
  const fine = calculateLateFine(loan.dueDate, today);

  const student = users.find(u => u.id === studentId) || { name: studentId };
  const book = books.find(b => b.id === bookId) || { name: bookId };

  const confirmMsg = fine > 0
    ? (currentLang === 'en' 
       ? `Confirm return for "${book.name}" by ${student.name}? Accumulated Late Fine: ₹${fine}.` 
       : `"${book.name}" ஒப்படைப்பை உறுதி செய்கிறீர்களா? தாமத கட்டணம்: ₹${fine}.`)
    : (currentLang === 'en' 
       ? `Confirm return for "${book.name}" by ${student.name}?` 
       : `"${book.name}" ஒப்படைப்பை உறுதி செய்கிறீர்களா?`);

  showConfirmModal(
    currentLang === 'en' ? "Return Book?" : "புத்தகம் ஒப்படைப்பு?",
    confirmMsg,
    () => {
      loan.returnDate = todayStr;
      loan.status = "Submitted";
      
      // Update quantity
      book.qty++;
      
      saveDatabase();
      addActivityLog(`Returned book "${book.name}" from ${student.name}. Fine paid: ₹${fine}.`, "success");
      showToast("toast_return_success", "success");
      
      // Refresh views
      renderLoansTable();
      if (document.getElementById("books-view").classList.contains("active")) renderBooksGrid();
    }
  );
}

// ==========================================================================
// USER (STUDENT) MANAGEMENT (ADMIN ONLY)
// ==========================================================================
function renderUsersTable() {
  const tbody = document.getElementById("users-table-body");
  tbody.innerHTML = "";

  const query = document.getElementById("user-search-input").value.toLowerCase().trim();

  let filtered = users;
  if (query !== "") {
    filtered = filtered.filter(u => 
      u.id.toLowerCase().includes(query) ||
      u.name.toLowerCase().includes(query)
    );
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 24px;">No matching student users found.</td></tr>`;
    return;
  }

  filtered.forEach(user => {
    // Current borrowed book
    const activeLoan = loans.find(l => l.studentId === user.id && l.status === "Not Submitted");
    const book = activeLoan ? books.find(b => b.id === activeLoan.bookId) : null;
    
    // Borrow history count
    const historyCount = loans.filter(l => l.studentId === user.id).length;

    // Overdue check
    let statusBadge = `<span class="badge badge-success">${currentLang==='en'?'Clear':'விடுப்பு'}</span>`;
    if (activeLoan) {
      const today = new Date("2026-05-25T14:07:00");
      const isOverdue = new Date(activeLoan.dueDate) < today;
      if (isOverdue) {
        statusBadge = `<span class="badge badge-danger">${currentLang==='en'?'Overdue':'நிலுவை'}</span>`;
      } else {
        statusBadge = `<span class="badge badge-warning">${currentLang==='en'?'Holding':'கைவசம்'}</span>`;
      }
    }

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="code-font">${user.id}</td>
      <td><strong>${user.name}</strong></td>
      <td>${book ? book.name : `<span style="color: var(--text-muted)">-</span>`}</td>
      <td class="code-font">${historyCount}</td>
      <td>${statusBadge}</td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-secondary btn-sm" onclick="viewUserHistory('${user.id}')" title="History">
            <i-lucide name="history" class="icon-sm"></i-lucide>
          </button>
          <button class="btn btn-secondary btn-sm" onclick="showEditUserModal('${user.id}')" title="Edit Profile">
            <i-lucide name="user-cog" class="icon-sm"></i-lucide>
          </button>
          <button class="btn btn-secondary btn-sm" onclick="deleteUserConfirm('${user.id}')" title="Delete Student" style="background-color: var(--danger-bg); color: var(--danger-color)">
            <i-lucide name="user-minus" class="icon-sm"></i-lucide>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  lucide.createIcons();
}

function filterUsers() {
  renderUsersTable();
}

function showAddUserModal() {
  document.getElementById("user-modal-title").innerText = translations[currentLang].add_user_modal_title;
  document.getElementById("user-form-action").value = "create";
  document.getElementById("user-edit-form").reset();
  
  document.getElementById("user-form-id").disabled = false;
  document.getElementById("user-form-password").required = true;
  document.querySelector(".password-field-wrapper").style.display = "block";

  openModal("user-form-modal");
}

function showEditUserModal(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;

  document.getElementById("user-modal-title").innerText = translations[currentLang].edit_user_modal_title;
  document.getElementById("user-form-action").value = "edit";
  
  document.getElementById("user-form-id").value = user.id;
  document.getElementById("user-form-id").disabled = true;
  document.getElementById("user-form-name").value = user.name;
  
  // Hide password fields for general edits (can change in user configuration page)
  document.getElementById("user-form-password").required = false;
  document.querySelector(".password-field-wrapper").style.display = "none";

  openModal("user-form-modal");
}

function saveUserForm() {
  const action = document.getElementById("user-form-action").value;
  const id = document.getElementById("user-form-id").value.trim().toUpperCase();
  const name = document.getElementById("user-form-name").value.trim();
  const password = document.getElementById("user-form-password").value;

  if (action === "create") {
    if (users.find(u => u.id.toLowerCase() === id.toLowerCase())) {
      alert("Error: Student with this ID already exists!");
      return;
    }
    const newUser = { id, name, password };
    users.push(newUser);
    addActivityLog(`Registered new student user ${name} (${id}).`, "success");
    showToast("toast_user_added", "success");
  } else {
    const user = users.find(u => u.id === id);
    if (user) {
      user.name = name;
      addActivityLog(`Updated profile for student ${name} (${id}).`, "info");
      showToast("toast_user_updated", "success");
    }
  }

  saveDatabase();
  closeModal("user-form-modal");
  renderUsersTable();
}

function deleteUserConfirm(userId) {
  const user = users.find(u => u.id === userId);
  if (!user) return;

  // Verify active checkouts
  const hasActive = loans.some(l => l.studentId === userId && l.status === "Not Submitted");
  if (hasActive) {
    alert("Error: Cannot delete user with outstanding borrowed book checkouts!");
    return;
  }

  const dict = translations[currentLang];
  showConfirmModal(
    currentLang==='en'?"Delete Student User?":"மாணவரை நீக்க வேண்டுமா?",
    currentLang==='en'?`Are you sure you want to remove student "${user.name}"?`:`மாணவர் "${user.name}" ஐ நிச்சயமாக நீக்க விரும்புகிறீர்களா?`,
    () => {
      users = users.filter(u => u.id !== userId);
      saveDatabase();
      addActivityLog(`Removed student ${user.name} (${userId}) from records.`, "warning");
      showToast("toast_user_deleted", "error");
      renderUsersTable();
    }
  );
}

// User History Modal display
function viewUserHistory(userId) {
  const student = users.find(u => u.id === userId);
  if (!student) return;

  document.getElementById("history-student-name").innerText = student.name;
  
  const tbody = document.getElementById("user-history-table-body");
  tbody.innerHTML = "";

  const userLoans = loans.filter(l => l.studentId === userId);
  const today = new Date("2026-05-25T14:07:00");

  if (userLoans.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align: center; color: var(--text-muted); padding: 18px;">No borrowing history found for this user.</td></tr>`;
  } else {
    userLoans.forEach(loan => {
      const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
      const fine = calculateLateFine(loan.dueDate, loan.returnDate ? new Date(loan.returnDate) : today);

      tbody.innerHTML += `
        <tr>
          <td><strong>${book.name}</strong></td>
          <td class="code-font">${formatDate(loan.borrowDate)}</td>
          <td class="code-font">${loan.returnDate ? formatDate(loan.returnDate) : '-'}</td>
          <td>
            <span class="badge ${loan.status === 'Submitted' ? 'badge-success' : 'badge-danger'}">
              ${loan.status === 'Submitted' ? (currentLang==='en'?'Returned':'ஒப்படைக்கப்பட்டது') : (currentLang==='en'?'Pending':'நிலுவையில்')}
            </span>
          </td>
          <td class="code-font">${fine}</td>
        </tr>
      `;
    });
  }

  openModal("user-history-modal");
}

// ==========================================================================
// SECURITY / CHANGE PASSWORD
// ==========================================================================
function handleChangePassword() {
  const currentPass = document.getElementById("change-old-password").value;
  const newPass = document.getElementById("change-new-password").value;

  if (currentRole === 'admin') {
    // Admin password check
    // Realistically, for admin in standard SPA demo we simulate this inside session storage
    const customAdminPass = localStorage.getItem("lib_admin_password") || "admin123";
    if (currentPass === customAdminPass) {
      localStorage.setItem("lib_admin_password", newPass);
      showToast("toast_pass_changed", "success");
      addActivityLog("Administrator changed account password.", "info");
      document.getElementById("change-password-form").reset();
    } else {
      showToast("toast_pass_wrong", "error");
    }
  } else {
    // Student password change
    const student = users.find(u => u.id === currentUser.id);
    if (student && student.password === currentPass) {
      student.password = newPass;
      saveDatabase();
      showToast("toast_pass_changed", "success");
      addActivityLog(`${currentUser.name} changed portal password.`, "info");
      document.getElementById("change-password-form").reset();
    } else {
      showToast("toast_pass_wrong", "error");
    }
  }
}

// ==========================================================================
// ADMIN REPORT GENERATORS & BACKUP
// ==========================================================================
function generateReport(type) {
  let content = "";
  let filename = "";

  if (type === "books") {
    filename = "Books_Inventory_Report.txt";
    content = "==================================================\n";
    content += "           GTN LIBRARY BOOKS INVENTORY REPORT        \n";
    content += `Generated: ${new Date("2026-05-25T14:07:24+05:30").toLocaleString()}\n`;
    content += "==================================================\n\n";
    content += "Book ID | Book Name | Author | Category | Qty | Shelf\n";
    content += "--------------------------------------------------\n";
    
    books.forEach(b => {
      content += `${b.id} | ${b.name} | ${b.author} | ${b.category} | ${b.qty} | ${b.shelf}\n`;
    });
    
    addActivityLog("Generated Books Inventory Report.", "info");
  } else {
    filename = "Library_Overdue_Defaulters_Report.txt";
    content = "==================================================\n";
    content += "       LIBRARY OVERDUE DEFAULTERS REPORT           \n";
    content += `Generated: ${new Date("2026-05-25T14:07:24+05:30").toLocaleString()}\n`;
    content += "==================================================\n\n";
    content += "StudentID | Student Name | Book Taken | Borrow Date | Due Date | Fine (₹)\n";
    content += "------------------------------------------------------------------------\n";

    const today = new Date("2026-05-25T14:07:00");
    const activeLoans = loans.filter(l => l.status === "Not Submitted");
    const overdueLoans = activeLoans.filter(l => new Date(l.dueDate) < today);

    overdueLoans.forEach(loan => {
      const student = users.find(u => u.id === loan.studentId) || { name: loan.studentId };
      const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
      const fine = calculateLateFine(loan.dueDate, today);
      content += `${loan.studentId} | ${student.name} | ${book.name} | ${loan.borrowDate} | ${loan.dueDate} | ₹${fine}\n`;
    });

    addActivityLog("Generated Library Defaulters Report.", "warning");
  }

  // Trigger file download
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function triggerDatabaseBackup() {
  const db = {
    books,
    users,
    loans,
    logs
  };
  const blob = new Blob([JSON.stringify(db, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "GTN_Library_Database_Backup.json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  addActivityLog("Initiated library database backup export.", "success");
  showToast("toast_backup_success", "success");
}

function renderSettingsLogs() {
  const logTerminal = document.getElementById("settings-activity-logs");
  logTerminal.innerHTML = "";
  
  logs.forEach(log => {
    const timeStr = new Date(log.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    logTerminal.innerHTML += `
      <div class="log-line">
        <span class="timestamp">[${timeStr}]</span>
        <span class="${log.type}">${log.text}</span>
      </div>
    `;
  });
  
  // Scroll to bottom
  logTerminal.scrollTop = logTerminal.scrollHeight;
}

// ==========================================================================
// UTILITIES (LOGS, NOTIFICATIONS, MODALS, TOASTS)
// ==========================================================================
function addActivityLog(text, type = "info") {
  const logItem = {
    time: new Date().toISOString(),
    text,
    type
  };
  logs.push(logItem);
  
  // Cap logs at 100 entries
  if (logs.length > 100) logs.shift();
  
  localStorage.setItem("lib_logs", JSON.stringify(logs));
}

function addNotification(text, type = "info", studentId = null) {
  const isEnabled = localStorage.getItem("lib_setting_notifications") !== 'false';
  if (!isEnabled) return;

  const newNotify = {
    id: Date.now(),
    text,
    time: "Just now",
    type,
    unread: true,
    studentId: studentId
  };
  notifications.unshift(newNotify);
  
  // Cap notifications at 200 to accommodate multiple students
  if (notifications.length > 200) notifications.pop();
  
  localStorage.setItem("lib_notifications", JSON.stringify(notifications));
  rebuildNotifications();
}

function rebuildNotifications() {
  const countSpan = document.getElementById("notifications-count");
  const container = document.getElementById("notifications-list-container");
  
  // Filter by student privacy
  let filteredNotifications = notifications;
  if (currentRole === 'student') {
    filteredNotifications = notifications.filter(n => !n.studentId || n.studentId === currentUser.id);
  }

  const unreadCount = filteredNotifications.filter(n => n.unread).length;
  if (unreadCount > 0) {
    countSpan.style.display = "flex";
    countSpan.innerText = unreadCount;
  } else {
    countSpan.style.display = "none";
  }

  container.innerHTML = "";
  if (filteredNotifications.length === 0) {
    container.innerHTML = `<div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.8rem;">No notifications found</div>`;
    return;
  }

  filteredNotifications.forEach(notify => {
    let iconName = "info";
    if (notify.type === "warning") iconName = "alert-triangle";
    if (notify.type === "success") iconName = "check";

    const item = document.createElement("div");
    item.className = `notification-item ${notify.unread ? 'unread' : ''}`;
    item.onclick = () => {
      notify.unread = false;
      localStorage.setItem("lib_notifications", JSON.stringify(notifications));
      rebuildNotifications();
    };
    
    item.innerHTML = `
      <div class="notification-item-icon ${notify.type}">
        <i-lucide name="${iconName}" class="icon-sm"></i-lucide>
      </div>
      <div class="notification-item-content">
        <p>${notify.text}</p>
        <span class="time">${notify.time}</span>
      </div>
    `;
    container.appendChild(item);
  });
  lucide.createIcons();
}

function clearNotifications() {
  notifications = [];
  localStorage.setItem("lib_notifications", JSON.stringify(notifications));
  rebuildNotifications();
}

function toggleNotificationsPanel() {
  const panel = document.getElementById("notifications-dropdown");
  panel.classList.toggle("active");
  
  // Close bell panel on outside click
  if (panel.classList.contains("active")) {
    // Mark all read
    notifications.forEach(n => n.unread = false);
    localStorage.setItem("lib_notifications", JSON.stringify(notifications));
    setTimeout(rebuildNotifications, 1000);
  }
}

// Modal actions
function openModal(modalId) {
  document.getElementById(modalId).classList.add("active");
  lucide.createIcons();
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove("active");
}

let confirmModalResolve = null;
function showConfirmModal(title, text, onConfirm) {
  document.getElementById("confirm-modal-title").innerText = title;
  document.getElementById("confirm-modal-text").innerText = text;
  
  const confirmBtn = document.getElementById("confirm-modal-btn-confirm");
  
  // Re-bind confirm listener
  confirmBtn.onclick = () => {
    onConfirm();
    closeModal("confirm-modal");
  };

  openModal("confirm-modal");
}

// Toasts UI popup
function showToast(translationKey, type = "success") {
  const container = document.getElementById("toast-container");
  const msg = translations[currentLang][translationKey] || translationKey;

  const toast = document.createElement("div");
  toast.className = `toast ${type} new-toast`;
  
  let icon = "check-circle";
  if (type === "error") icon = "x-circle";
  if (type === "info") icon = "info";

  toast.innerHTML = `
    <i-lucide name="${icon}"></i-lucide>
    <span>${msg}</span>
    <button class="toast-close-btn" onclick="this.parentElement.remove(); playAudioTone('click')">
      <i-lucide name="x"></i-lucide>
    </button>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  // Remove temporary class in next tick
  setTimeout(() => {
    toast.classList.remove("new-toast");
  }, 50);

  // Slide out after 3.5s
  setTimeout(() => {
    if (container.contains(toast)) {
      toast.style.animation = "slideInRight var(--transition-fast) reverse";
      toast.addEventListener("animationend", () => {
        toast.remove();
      });
    }
  }, 3500);
}

// Formatting helpers
function formatDate(dateStr) {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ta-IN', options);
}

function formatTimeAgo(dateStr) {
  const date = new Date(dateStr);
  const diff = Date.now() - date;
  
  const sec = Math.floor(diff / 1000);
  const min = Math.floor(sec / 60);
  const hr = Math.floor(min / 60);

  if (sec < 60) return currentLang === 'en' ? "Just now" : "இப்போது";
  if (min < 60) return `${min} ${currentLang === 'en' ? 'mins ago' : 'நிமிடங்களுக்கு முன்'}`;
  if (hr < 24) return `${hr} ${currentLang === 'en' ? 'hours ago' : 'மணிநேரங்களுக்கு முன்'}`;
  
  return date.toLocaleDateString();
}

function updateTimeDisplay() {
  const display = document.getElementById("current-time-display");
  if (display) {
    const today = new Date("2026-05-25T14:07:00"); // Standard timestamp simulation offset
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    display.innerText = today.toLocaleDateString(currentLang === 'en' ? 'en-US' : 'ta-IN', options);
  }
}

// ==========================================================================
// UPGRADE FUNCTIONS: THEME, FONT, SOUND, REQUESTS, BOOKMARKS, RECIEPT, PROFILE
// ==========================================================================
function setThemeAccent(palette) {
  document.body.classList.remove(
    "theme-indigo", "theme-emerald", "theme-crimson", "theme-amber", "theme-midnight",
    "theme-sunset", "theme-ocean", "theme-forest", "theme-berry"
  );
  document.body.classList.add(`theme-${palette}`);
  localStorage.setItem("lib_setting_theme_palette", palette);
  const select = document.getElementById("settings-theme-select");
  if (select) select.value = palette;
}

function setButtonCombination(style) {
  document.body.classList.remove(
    "btn-style-glow", "btn-style-solid", "btn-style-glass", "btn-style-retro",
    "btn-style-neumorphic", "btn-style-pop", "btn-style-minimal"
  );
  document.body.classList.add(`btn-style-${style}`);
  localStorage.setItem("lib_setting_button_style", style);
  const select = document.getElementById("settings-button-select");
  if (select) select.value = style;
}

function setFontSizeScale(size) {
  document.body.classList.remove("font-sm", "font-md", "font-lg");
  document.body.classList.add(size);
  localStorage.setItem("lib_setting_font_size", size);
  const select = document.getElementById("settings-font-select");
  if (select) select.value = size;
}

function playAudioTone(type) {
  if (!soundEnabled) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === "success") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === "error") {
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.25);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  } catch (e) {
    console.error("Web Audio Tone Error:", e);
  }
}

function toggleAppSound(enabled) {
  soundEnabled = enabled;
  localStorage.setItem("lib_setting_sound", enabled ? "true" : "false");
  const chk = document.getElementById("settings-sound-toggle");
  if (chk) chk.checked = enabled;
  const toggleInput = document.getElementById("settings-sound-toggle");
  if (toggleInput) toggleInput.checked = enabled;
}

function requestBookStudent(bookId, type) {
  if (currentRole !== 'student') return;

  const book = books.find(b => b.id === bookId);
  if (!book) return;

  // Check duplicate pending request
  const hasPending = requests.some(r => r.studentId === currentUser.id && r.bookId === bookId && r.status === "Pending");
  if (hasPending) {
    showToast(currentLang === 'en' ? "You already have a pending request for this book." : "இந்த புத்தகத்திற்கு ஏற்கனவே ஒரு நிலுவை கோரிக்கை உள்ளது.", "error");
    playAudioTone("error");
    return;
  }

  // Check active loan
  const hasLoan = loans.some(l => l.studentId === currentUser.id && l.bookId === bookId && l.status === "Not Submitted");
  if (hasLoan) {
    showToast(currentLang === 'en' ? "You currently borrow this book." : "இந்தப் புத்தகம் தற்போது உங்களிடம் இரவல் உள்ளது.", "error");
    playAudioTone("error");
    return;
  }

  const newReq = {
    id: "REQ" + Date.now(),
    studentId: currentUser.id,
    bookId: bookId,
    requestDate: new Date().toISOString().split('T')[0],
    type: type,
    status: "Pending"
  };

  requests.push(newReq);
  saveDatabase();

  addActivityLog(`${currentUser.name} requested book "${book.name}" (${type}).`, "info");
  showToast("toast_request_submitted", "success");
  playAudioTone("success");

  renderBooksGrid();
  renderStudentPersonalLibrary();
}

function claimBookStudent(bookId) {
  requestBookStudent(bookId, 'Request');
}

function approveRequest(reqId) {
  const req = requests.find(r => r.id === reqId);
  if (!req) return;

  const book = books.find(b => b.id === req.bookId);
  const student = users.find(u => u.id === req.studentId) || { name: req.studentId };

  if (!book) {
    alert("Error: Book not found!");
    return;
  }

  if (book.qty <= 0 && req.type === 'Request') {
    alert("Error: Selected book is currently out of stock!");
    playAudioTone("error");
    return;
  }

  req.status = "Approved";

  const todayStr = new Date("2026-05-25").toISOString().split('T')[0];
  const dueStr = getDueDate(0);

  const newLoan = {
    studentId: req.studentId,
    bookId: req.bookId,
    borrowDate: todayStr,
    dueDate: dueStr,
    returnDate: null,
    status: "Not Submitted"
  };

  loans.push(newLoan);
  book.qty--;

  saveDatabase();

  addActivityLog(`Approved request ${reqId} for student ${student.name} (Book: ${book.name}).`, "success");
  addNotification(`Your request for "${book.name}" has been APPROVED. Please pick it up at the counter.`, "success", req.studentId);
  
  showToast(currentLang === 'en' ? "Request approved successfully." : "கோரிக்கை வெற்றிகரமாக அங்கீகரிக்கப்பட்டது.", "success");
  playAudioTone("success");

  renderApprovalsQueue();
  renderLoansTable();
  renderBooksGrid();
}

function declineRequest(reqId) {
  const req = requests.find(r => r.id === reqId);
  if (!req) return;

  const book = books.find(b => b.id === req.bookId);
  const student = users.find(u => u.id === req.studentId) || { name: req.studentId };

  req.status = "Declined";

  saveDatabase();

  addActivityLog(`Declined request ${reqId} for student ${student.name} (Book: ${book ? book.name : req.bookId}).`, "warning");
  addNotification(`Your request for "${book ? book.name : req.bookId}" has been DECLINED.`, "warning", req.studentId);
  
  showToast(currentLang === 'en' ? "Request declined successfully." : "கோரிக்கை நிராகரிக்கப்பட்டது.", "error");
  playAudioTone("click");

  renderApprovalsQueue();
}

function toggleBookmark(bookId) {
  if (currentRole !== 'student') return;
  const idx = bookmarks.indexOf(bookId);
  if (idx > -1) {
    bookmarks.splice(idx, 1);
    saveBookmarks();
    showToast("toast_bookmark_removed", "info");
    playAudioTone("click");
  } else {
    bookmarks.push(bookId);
    saveBookmarks();
    showToast("toast_bookmark_added", "success");
    playAudioTone("success");
  }
  renderBooksGrid();
}

function saveBookmarks() {
  if (currentUser && currentRole === 'student') {
    localStorage.setItem(`lib_bookmarks_${currentUser.id}`, JSON.stringify(bookmarks));
  }
}

function toggleShowBookmarksFilter() {
  showBookmarksOnly = !showBookmarksOnly;
  const btn = document.getElementById("btn-show-bookmarks");
  if (btn) {
    if (showBookmarksOnly) {
      btn.classList.add("btn-bookmark-active");
      btn.querySelector("span").innerText = currentLang === 'en' ? "Show All" : "அனைத்தும் காட்டு";
    } else {
      btn.classList.remove("btn-bookmark-active");
      btn.querySelector("span").innerText = currentLang === 'en' ? "Bookmarks" : "புத்தகக்குறிகள்";
    }
  }
  renderBooksGrid();
}

function renderStudentDashboard() {
  const activeStudentLoans = loans.filter(l => l.studentId === currentUser.id && l.status === "Not Submitted");
  
  const holdingSpan = document.getElementById("student-holding-count");
  if (holdingSpan) holdingSpan.innerText = activeStudentLoans.length;

  const welcomeTitle = document.getElementById("student-welcome-title");
  if (welcomeTitle) {
    welcomeTitle.innerText = currentLang === 'en'
      ? `Welcome back, ${currentUser.name}!`
      : `நல்வரவு, ${currentUser.name}!`;
  }

  const recList = document.getElementById("recommended-books-list");
  if (recList) {
    recList.innerHTML = "";
    const recommendedBooks = books.slice(0, 5);
    recommendedBooks.forEach(book => {
      const card = document.createElement("div");
      card.className = "recommended-card";
      card.onclick = () => showBookDetails(book.id);
      
      const coverBgStyle = `background: linear-gradient(135deg, ${book.color || '#6366f1'} 0%, rgba(15,23,42,0.7) 100%)`;
      
      card.innerHTML = `
        <div class="cover" style="${coverBgStyle}">
          <span class="cat" style="position: relative; z-index: 2;">${translateCategory(book.category)}</span>
          <div class="cover-logo-wrapper-mini" style="opacity: 0.18; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none; z-index: 1; color: #ffffff;">
            ${getCategoryIconSVG(book.category, 48)}
          </div>
          <span class="title" style="position: relative; z-index: 2;">${book.name}</span>
        </div>
        <div class="title-text">${book.name}</div>
        <div class="author-text">${book.author}</div>
      `;
      recList.appendChild(card);
    });
  }

  const recentList = document.getElementById("recently-added-list");
  if (recentList) {
    recentList.innerHTML = "";
    const recentBooks = books.slice(-4).reverse();
    recentBooks.forEach(book => {
      const isAvail = book.qty > 0;
      const item = document.createElement("div");
      item.className = "recent-addition-item";
      item.style.cursor = "pointer";
      item.onclick = () => showBookDetails(book.id);
      
      const coverBgStyle = `background: linear-gradient(135deg, ${book.color || '#6366f1'} 0%, rgba(15,23,42,0.85) 100%)`;
      
      item.innerHTML = `
        <div class="cover-mini" style="${coverBgStyle}; position: relative; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2);">
          ${getCategoryIconSVG(book.category, 20)}
        </div>
        <div class="item-details">
          <h4>${book.name}</h4>
          <p>${book.author}</p>
        </div>
        <span class="badge ${isAvail ? 'badge-success' : 'badge-danger'}">
          ${isAvail ? (currentLang === 'en' ? 'Available' : 'கிடைக்கும்') : (currentLang === 'en' ? 'Issued Out' : 'இரவல் போயுள்ளது')}
        </span>
      `;
      recentList.appendChild(item);
    });
  }

  const alertsList = document.getElementById("student-deadline-alerts-list");
  if (alertsList) {
    alertsList.innerHTML = "";
    const today = new Date("2026-05-25T14:07:00");
    if (activeStudentLoans.length === 0) {
      alertsList.innerHTML = `
        <div class="alert-item-box alert-success">
          <div class="icon"><i-lucide name="check-circle" class="icon-sm"></i-lucide></div>
          <div class="desc">
            <strong>${currentLang === 'en' ? 'All Clear!' : 'எல்லாம் சரி!'}</strong>
            ${currentLang === 'en' ? 'You do not have any active books checked out at the moment.' : 'உங்களிடம் தற்போது இரவல் பெறப்பட்ட புத்தகங்கள் எதுவும் இல்லை.'}
          </div>
        </div>
      `;
    } else {
      activeStudentLoans.forEach(loan => {
        const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
        const dueDate = new Date(loan.dueDate);
        const timeDiff = dueDate.getTime() - today.getTime();
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        
        let alertClass = "alert-success";
        let iconName = "check-circle";
        let statusTitle = currentLang === 'en' ? "On Track" : "சரியான நிலை";
        let statusDesc = currentLang === 'en' ? `Return due in ${diffDays} days.` : `${diffDays} நாட்களில் ஒப்படைக்க வேண்டும்.`;

        if (diffDays < 0) {
          alertClass = "";
          iconName = "alert-triangle";
          statusTitle = currentLang === 'en' ? "Overdue Warning!" : "தாமத எச்சரிக்கை!";
          const lateDays = Math.abs(diffDays);
          const fine = calculateLateFine(loan.dueDate, today);
          statusDesc = currentLang === 'en' 
            ? `This book is overdue by ${lateDays} days. Accumulated fine: ₹${fine}.`
            : `இந்த புத்தகம் ${lateDays} நாட்கள் தாமதமாகியுள்ளது. அபராதம்: ₹${fine}.`;
        } else if (diffDays <= 3) {
          alertClass = "alert-warning";
          iconName = "clock";
          statusTitle = currentLang === 'en' ? "Due Soon!" : "விரைவில் ஒப்படைக்க வேண்டும்!";
          statusDesc = currentLang === 'en' 
            ? `Please return this book within ${diffDays} days to avoid fines.`
            : `அபராதத்தைத் தவிர்க்க ${diffDays} நாட்களுக்குள் ஒப்படைக்கவும்.`;
        }

        const box = document.createElement("div");
        box.className = `alert-item-box ${alertClass}`;
        box.innerHTML = `
          <div class="icon"><i-lucide name="${iconName}" class="icon-sm"></i-lucide></div>
          <div class="desc">
            <strong>${statusTitle}: "${book.name}"</strong>
            ${statusDesc}
          </div>
        `;
        alertsList.appendChild(box);
      });
    }
  }
  lucide.createIcons();
}

function renderStudentPersonalLibrary() {
  const today = new Date("2026-05-25T14:07:00");

  // 1. Calculate and update summary metrics
  const activeStudentLoans = loans.filter(l => l.studentId === currentUser.id && l.status === "Not Submitted");
  const returnedStudentLoans = loans.filter(l => l.studentId === currentUser.id && l.status === "Submitted");
  const pendingStudentRequests = requests.filter(r => r.studentId === currentUser.id && r.status === "Pending");
  
  const totalClaimedCount = loans.filter(l => l.studentId === currentUser.id).length + pendingStudentRequests.length;
  
  const lblTotalClaimed = document.getElementById("lbl-total-claimed-count");
  if (lblTotalClaimed) lblTotalClaimed.innerText = totalClaimedCount;

  const lblActiveBorrowed = document.getElementById("lbl-active-borrowed-count");
  if (lblActiveBorrowed) lblActiveBorrowed.innerText = activeStudentLoans.length;

  const lblReturned = document.getElementById("lbl-returned-books-count");
  if (lblReturned) lblReturned.innerText = returnedStudentLoans.length;

  const lblFavorites = document.getElementById("lbl-favorite-books-count");
  if (lblFavorites) lblFavorites.innerText = bookmarks.length;

  // 2. Build Library Records Map
  const libraryMap = new Map();

  // Populate Favorites first (so they are visible in "Favorites" tab with catalog details even if not yet claimed)
  bookmarks.forEach(bookId => {
    const book = books.find(b => b.id === bookId);
    if (book) {
      libraryMap.set(bookId, {
        book,
        claimDate: "-",
        returnDate: "-",
        status: book.qty > 0 ? "Available" : "Out of Stock",
        isFavorite: true
      });
    }
  });

  // Populate Returned Loans (ascending so latest overwrites)
  const sortedReturned = [...returnedStudentLoans].sort((a, b) => new Date(a.returnDate) - new Date(b.returnDate));
  sortedReturned.forEach(loan => {
    const book = books.find(b => b.id === loan.bookId);
    if (book) {
      libraryMap.set(loan.bookId, {
        book,
        claimDate: loan.borrowDate,
        returnDate: loan.returnDate,
        status: "Returned",
        isFavorite: bookmarks.includes(loan.bookId)
      });
    }
  });

  // Populate Pending Requests
  pendingStudentRequests.forEach(req => {
    const book = books.find(b => b.id === req.bookId);
    if (book) {
      libraryMap.set(req.bookId, {
        book,
        claimDate: req.requestDate,
        returnDate: "-",
        status: "Pending",
        isFavorite: bookmarks.includes(req.bookId),
        requestId: req.id
      });
    }
  });

  // Populate Active Loans (highest precedence)
  activeStudentLoans.forEach(loan => {
    const book = books.find(b => b.id === loan.bookId);
    if (book) {
      let status = "Borrowed";
      if (libReadingStatus.includes(loan.bookId)) {
        status = "Reading";
      } else if (new Date(loan.dueDate) < today) {
        status = "Expired";
      }
      libraryMap.set(loan.bookId, {
        book,
        claimDate: loan.borrowDate,
        returnDate: loan.dueDate,
        status,
        isFavorite: bookmarks.includes(loan.bookId)
      });
    }
  });

  // 3. Filter library records based on launcherCategory
  let records = Array.from(libraryMap.values());

  if (launcherCategory === 'reading') {
    records = records.filter(r => r.status === "Reading");
  } else if (launcherCategory === 'borrowed') {
    records = records.filter(r => r.status === "Borrowed" || r.status === "Reading" || r.status === "Expired");
  } else if (launcherCategory === 'returned') {
    records = records.filter(r => r.status === "Returned");
  } else if (launcherCategory === 'pending') {
    records = records.filter(r => r.status === "Borrowed" || r.status === "Reading" || r.status === "Expired");
  } else if (launcherCategory === 'favorites') {
    records = records.filter(r => r.isFavorite);
  } else if (launcherCategory === 'recent') {
    // Show claimed books sorted by claim date desc
    records = records.filter(r => r.claimDate !== "-");
    records.sort((a, b) => new Date(b.claimDate) - new Date(a.claimDate));
  }

  // 4. Render Grid Cards
  const gridContainer = document.getElementById("launcher-books-grid");
  if (!gridContainer) return;
  gridContainer.innerHTML = "";

  if (records.length === 0) {
    let emptyMsg = "";
    if (launcherCategory === 'reading') {
      emptyMsg = currentLang === 'en' ? "You are not reading any books currently. Launch a book from your Library!" : "நீங்கள் தற்போது எந்தப் புத்தகமும் வாசிக்கவில்லை. உங்கள் நூலகத்தில் இருந்து புத்தகத்தைத் தொடங்கவும்!";
    } else if (launcherCategory === 'borrowed') {
      emptyMsg = currentLang === 'en' ? "No borrowed books found." : "இரவல் பெறப்பட்ட புத்தகங்கள் எதுவும் இல்லை.";
    } else if (launcherCategory === 'returned') {
      emptyMsg = currentLang === 'en' ? "No returned books history found." : "ஒப்படைக்கப்பட்ட புத்தகங்களின் வரலாறு எதுவும் இல்லை.";
    } else if (launcherCategory === 'pending') {
      emptyMsg = currentLang === 'en' ? "No books pending return." : "ஒப்படைக்க வேண்டிய நிலுவை புத்தகங்கள் எதுவும் இல்லை.";
    } else if (launcherCategory === 'favorites') {
      emptyMsg = currentLang === 'en' ? "No favorite books bookmarked yet." : "விருப்பமான புத்தகங்கள் இன்னும் குறிக்கப்படவில்லை.";
    } else {
      emptyMsg = currentLang === 'en' ? "No activity history found in your library." : "உங்கள் நூலகத்தில் நடவடிக்கைகள் வரலாறு எதுவும் இல்லை.";
    }
    gridContainer.innerHTML = `<div class="glass-panel" style="grid-column: 1 / -1; padding: 40px; text-align: center; color: var(--text-muted);">${emptyMsg}</div>`;
    return;
  }

  records.forEach(record => {
    const card = document.createElement("div");
    card.className = "book-card-launcher glass-panel";
    
    const coverBgStyle = `background: linear-gradient(135deg, ${record.book.color || '#6366f1'} 0%, rgba(15,23,42,0.85) 100%)`;
    
    let statusClass = "badge-info";
    let statusText = record.status;
    if (record.status === "Reading") {
      statusClass = "badge-student";
      statusText = currentLang === 'en' ? "Reading" : "வாசிக்கிறது";
    } else if (record.status === "Borrowed") {
      statusClass = "badge-warning";
      statusText = currentLang === 'en' ? "Borrowed" : "இரவல்";
    } else if (record.status === "Returned") {
      statusClass = "badge-success";
      statusText = currentLang === 'en' ? "Returned" : "திரும்பியது";
    } else if (record.status === "Pending") {
      statusClass = "badge-info";
      statusText = currentLang === 'en' ? "Pending" : "நிலுவை";
    } else if (record.status === "Expired") {
      statusClass = "badge-danger";
      statusText = currentLang === 'en' ? "Expired" : "காலாவதியானது";
    } else {
      // Fallback
      statusClass = record.book.qty > 0 ? "badge-success" : "badge-danger";
      statusText = record.book.qty > 0 ? (currentLang === 'en' ? "Available" : "கிடைக்கும்") : (currentLang === 'en' ? "Out of Stock" : "கையிருப்பில்லை");
    }

    let actionButtons = "";
    if (record.status === "Reading") {
      actionButtons = `
        <button class="btn btn-primary btn-sm btn-gradient" onclick="startReadingBook('${record.book.id}'); event.stopPropagation();">
          <i-lucide name="play" class="icon-sm"></i-lucide>
          <span data-translate="btn_continue_reading">${currentLang === 'en' ? "Continue Reading" : "தொடர்ந்து வாசி"}</span>
        </button>
      `;
    } else if (record.status === "Borrowed") {
      actionButtons = `
        <button class="btn btn-primary btn-sm btn-gradient" onclick="startReadingBook('${record.book.id}'); event.stopPropagation();">
          <i-lucide name="play" class="icon-sm"></i-lucide>
          <span data-translate="btn_read_now">${currentLang === 'en' ? "Read Now" : "வாசி"}</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="studentReturnBookSimulation('${record.book.id}', '${record.claimDate}'); event.stopPropagation();">
          <i-lucide name="undo-2" class="icon-sm"></i-lucide>
          <span data-translate="btn_return">${currentLang === 'en' ? "Return" : "ஒப்படை"}</span>
        </button>
      `;
    } else if (record.status === "Expired") {
      actionButtons = `
        <button class="btn btn-danger btn-sm" onclick="studentReturnBookSimulation('${record.book.id}', '${record.claimDate}'); event.stopPropagation();" style="width: 100%;">
          <i-lucide name="undo-2" class="icon-sm"></i-lucide>
          <span data-translate="btn_return">${currentLang === 'en' ? "Return" : "ஒப்படை"}</span>
        </button>
      `;
    } else if (record.status === "Pending") {
      actionButtons = `
        <button class="btn btn-secondary btn-sm" onclick="cancelStudentRequest('${record.requestId}'); event.stopPropagation();" style="width: 100%; color: var(--danger-color); border-color: var(--danger-color);">
          <i-lucide name="trash-2" class="icon-sm"></i-lucide>
          <span data-translate="btn_cancel">${currentLang === 'en' ? "Cancel Claim" : "ரத்து செய்"}</span>
        </button>
      `;
    } else if (record.status === "Returned") {
      actionButtons = `
        <button class="btn btn-primary btn-sm btn-gradient" onclick="requestBookStudent('${record.book.id}', 'Request'); event.stopPropagation();" style="width: 100%;">
          <i-lucide name="git-pull-request" class="icon-sm"></i-lucide>
          <span data-translate="btn_borrow_this">${currentLang === 'en' ? "Claim Book" : "கோரவும்"}</span>
        </button>
      `;
    } else {
      actionButtons = `
        <button class="btn btn-primary btn-sm btn-gradient" onclick="requestBookStudent('${record.book.id}', 'Request'); event.stopPropagation();" style="width: 100%;">
          <i-lucide name="git-pull-request" class="icon-sm"></i-lucide>
          <span data-translate="btn_borrow_this">${currentLang === 'en' ? "Claim Book" : "கோரவும்"}</span>
        </button>
      `;
    }

    card.onclick = () => showBookDetails(record.book.id);

    card.innerHTML = `
      <div class="status-overlay">
        <span class="badge ${statusClass}">${statusText}</span>
      </div>
      <div class="cover-logo-wrapper" style="${coverBgStyle}">
        ${getCategoryIconSVG(record.book.category, 48)}
      </div>
      <div class="details">
        <h3>${record.book.name}</h3>
        <p class="author">${record.book.author}</p>
        <div class="dates">
          ${record.claimDate !== "-" ? `<div>Claimed: ${formatDate(record.claimDate)}</div>` : ''}
          ${record.status === "Returned" && record.returnDate !== "-" ? `<div>Returned: ${formatDate(record.returnDate)}</div>` : ''}
          ${(record.status === "Borrowed" || record.status === "Reading" || record.status === "Expired") && record.returnDate !== "-" ? `<div>Due Date: ${formatDate(record.returnDate)}</div>` : ''}
        </div>
      </div>
      <div class="actions-menu">
        ${actionButtons}
      </div>
    `;
    
    gridContainer.appendChild(card);
  });
  
  lucide.createIcons();
}

function setLauncherCategory(category, btn) {
  launcherCategory = category;
  
  // Set active class
  document.querySelectorAll(".launcher-nav-btn").forEach(b => {
    b.classList.remove("active");
  });
  if (btn) {
    btn.classList.add("active");
  } else {
    const activeBtn = document.getElementById(`btn-launcher-cat-${category}`);
    if (activeBtn) activeBtn.classList.add("active");
  }
  
  renderStudentPersonalLibrary();
}

let simulatorInterval = null;

function startReadingBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;

  // Add to reading status
  if (!libReadingStatus.includes(bookId)) {
    libReadingStatus.push(bookId);
  }
  libLastOpened = bookId;
  
  // Log reading history start
  libReadingHistory.push({
    bookId: bookId,
    time: new Date().toISOString(),
    action: "started"
  });
  
  saveLauncherState();
  addActivityLog(`${currentUser.name} started reading "${book.name}".`, "info");

  // Setup Simulator Modal UI
  document.getElementById("simulator-book-name").innerText = book.name;
  document.getElementById("simulator-book-author").innerText = book.author;
  document.getElementById("simulator-book-logo").innerHTML = getCategoryIconSVG(book.category, 80);
  
  const progressBar = document.getElementById("simulator-progress-bar");
  progressBar.style.width = "0%";
  
  const progressText = document.getElementById("simulator-progress-text");
  const baseText = currentLang === 'en' ? "Simulating reading progress..." : "வாசிப்பு செயல்முறை உருவகப்படுத்துகிறது...";
  progressText.innerText = `${baseText} 0%`;

  openModal("reading-simulator-modal");
  playAudioTone("click");

  // Start progress loop
  let progress = 0;
  if (simulatorInterval) clearInterval(simulatorInterval);
  
  simulatorInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 8) + 4; // Increment by 4-11%
    if (progress >= 100) {
      progress = 100;
      clearInterval(simulatorInterval);
      simulatorInterval = null;
      
      // Update UI to completion
      progressBar.style.width = "100%";
      progressText.innerText = currentLang === 'en' ? "Reading session complete! 100%" : "வாசிப்பு முடிந்தது! 100%";
      
      // Save completion history
      libReadingHistory.push({
        bookId: bookId,
        time: new Date().toISOString(),
        action: "completed"
      });
      saveLauncherState();
      
      // Play Audio and Toast
      playAudioTone("success");
      showToast("toast_reading_finished", "success");
      
      // Log Activity
      addActivityLog(`${currentUser.name} completed reading "${book.name}".`, "success");
      
      // Auto-close after 1.2 seconds
      setTimeout(() => {
        closeReadingSimulator();
      }, 1200);
    } else {
      progressBar.style.width = `${progress}%`;
      progressText.innerText = `${baseText} ${progress}%`;
    }
  }, 150);
}

function closeReadingSimulator() {
  if (simulatorInterval) {
    clearInterval(simulatorInterval);
    simulatorInterval = null;
  }
  closeModal("reading-simulator-modal");
  renderStudentPersonalLibrary();
  renderStudentDashboard();
}

function studentReturnBookSimulation(bookId, borrowDate) {
  const loan = loans.find(l => l.studentId === currentUser.id && l.bookId === bookId && l.borrowDate === borrowDate && l.status === "Not Submitted");
  if (!loan) return;

  const today = new Date("2026-05-25T14:07:00");
  const todayStr = today.toISOString().split('T')[0];
  const fine = calculateLateFine(loan.dueDate, today);
  const book = books.find(b => b.id === bookId) || { name: bookId };

  showConfirmModal(
    currentLang === 'en' ? "Return Book?" : "புத்தகம் ஒப்படைப்பு?",
    currentLang === 'en' ? `Are you sure you want to return "${book.name}"? Accumulated fine: ₹${fine}.` : `"${book.name}" ஒப்படைப்பை உறுதி செய்கிறீர்களா? அபராதம்: ₹${fine}.`,
    () => {
      loan.returnDate = todayStr;
      loan.status = "Submitted";
      book.qty++;
      
      // Remove from active reading status
      const readingIndex = libReadingStatus.indexOf(bookId);
      if (readingIndex > -1) {
        libReadingStatus.splice(readingIndex, 1);
      }

      saveDatabase();
      addActivityLog(`Returned book "${book.name}" from ${currentUser.name} (Simulation). Fine paid: ₹${fine}.`, "success");
      addNotification(`Your return of "${book.name}" has been processed.`, "success", currentUser.id);
      showToast("toast_return_success", "success");
      playAudioTone("success");

      renderStudentPersonalLibrary();
      renderStudentDashboard();
      renderBooksGrid();
    }
  );
}

function cancelStudentRequest(reqId) {
  const req = requests.find(r => r.id === reqId && r.studentId === currentUser.id);
  if (!req) return;

  showConfirmModal(
    currentLang === 'en' ? "Cancel Request?" : "கோரிக்கையை ரத்து செய்யலாமா?",
    currentLang === 'en' ? "Are you sure you want to cancel this pending request?" : "இந்த நிலுவை கோரிக்கையை நிச்சயமாக ரத்து செய்ய விரும்புகிறீர்களா?",
    () => {
      requests = requests.filter(r => r.id !== reqId);
      saveDatabase();

      addActivityLog(`${currentUser.name} cancelled request ${reqId}.`, "warning");
      showToast(currentLang === 'en' ? "Pending request cancelled." : "நிலுவை கோரிக்கை ரத்து செய்யப்பட்டது.", "info");
      playAudioTone("click");

      renderStudentPersonalLibrary();
    }
  );
}

function getCategoryIconSVG(category, size = 48) {
  const cat = (category || "").toLowerCase();
  if (cat.includes("computer") || cat.includes("programming")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="20" x2="22" y2="20"></line><line x1="12" y1="17" x2="12" y2="20"></line></svg>`;
  }
  if (cat.includes("literature") || cat.includes("tamil") || cat.includes("english")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;
  }
  if (cat.includes("science") || cat.includes("physics") || cat.includes("chemistry")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-atom"><circle cx="12" cy="12" r="1"></circle><path d="M12 2a15.3 15.3 0 0 1 4 9.75 15.3 15.3 0 0 1-4 9.75 15.3 15.3 0 0 1-4-9.75A15.3 15.3 0 0 1 12 2Z"></path><path d="M12 2a15.3 15.3 0 0 1 4 9.75 15.3 15.3 0 0 1-4 9.75 15.3 15.3 0 0 1-4-9.75A15.3 15.3 0 0 1 12 2Z" transform="rotate(120 12 12)"></path><path d="M12 2a15.3 15.3 0 0 1 4 9.75 15.3 15.3 0 0 1-4 9.75 15.3 15.3 0 0 1-4-9.75A15.3 15.3 0 0 1 12 2Z" transform="rotate(240 12 12)"></path></svg>`;
  }
  if (cat.includes("technology") || cat.includes("electronics") || cat.includes("cpu")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu"><rect x="4" y="4" width="16" height="16" rx="2"></rect><rect x="9" y="9" width="6" height="6"></rect><path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"></path></svg>`;
  }
  if (cat.includes("math")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calculator"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="8" y1="6" x2="16" y2="6"></line><line x1="16" y1="14" x2="16" y2="18"></line><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><circle cx="9" cy="16" r="1"></circle><circle cx="9" cy="20" r="1"></circle></svg>`;
  }
  if (cat.includes("design") || cat.includes("art")) {
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-palette"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 9.25 20.25 7.25 18 7.25C17.25 7.25 16.75 6.75 16.75 6C16.75 5.5 17 5 17 4.25C17 2.25 14.75 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><circle cx="7.5" cy="10.5" r="1"></circle><circle cx="11.5" cy="7.5" r="1"></circle><circle cx="16.5" cy="9.5" r="1"></circle></svg>`;
  }
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>`;
}

function downloadBorrowingReceipt() {
  if (currentRole !== 'student') return;
  const activeStudentLoans = loans.filter(l => l.studentId === currentUser.id && l.status === "Not Submitted");
  const today = new Date("2026-05-25T14:07:00");

  let content = "==================================================\n";
  content += "          GTN LIBRARY - BORROWING RECEIPT          \n";
  content += `Student ID   : ${currentUser.id}\n`;
  content += `Student Name : ${currentUser.name}\n`;
  content += `Date         : ${today.toLocaleDateString()}\n`;
  content += "==================================================\n\n";
  content += "Book ID | Book Name | Issued Date | Due Date | Fine (₹)\n";
  content += "--------------------------------------------------\n";

  if (activeStudentLoans.length === 0) {
    content += "No active borrowed books at the moment.\n";
  } else {
    activeStudentLoans.forEach(loan => {
      const book = books.find(b => b.id === loan.bookId) || { name: loan.bookId };
      const fine = calculateLateFine(loan.dueDate, today);
      content += `${loan.bookId} | ${book.name} | ${loan.borrowDate} | ${loan.dueDate} | ₹${fine}\n`;
    });
  }

  content += "\n==================================================\n";
  content += "Thank you for visiting G.T.N. Arts College Library!\n";
  content += "Please return books on time to avoid late fines.\n";

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `GTN_Library_Receipt_${currentUser.id}.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  addActivityLog(`${currentUser.name} downloaded their borrowing receipt.`, "info");
  playAudioTone("success");
}

function handleWelcomeSearch(event) {
  if (event.key === "Enter") {
    const val = event.target.value.trim();
    if (val) {
      document.getElementById("book-search-input").value = val;
      switchView("books-view");
      event.target.value = "";
      renderBooksGrid();
    }
  }
}

function handleUpdateProfile() {
  const nameInput = document.getElementById("profile-form-name").value.trim();
  if (!nameInput) return;

  if (currentRole === 'admin') {
    localStorage.setItem("lib_admin_name", nameInput);
    document.getElementById("portal-user-name").innerText = nameInput;
    addActivityLog(`Administrator renamed profile to "${nameInput}".`, "info");
  } else {
    const student = users.find(u => u.id === currentUser.id);
    if (student) {
      student.name = nameInput;
      currentUser.name = nameInput;
      
      const sessionData = JSON.parse(localStorage.getItem("lib_session"));
      if (sessionData) {
        sessionData.user.name = nameInput;
        localStorage.setItem("lib_session", JSON.stringify(sessionData));
      }
      
      saveDatabase();
      document.getElementById("portal-user-name").innerText = nameInput;
      
      const initials = nameInput.split(' ').map(n=>n[0]).join('').substring(0,2).toUpperCase();
      document.getElementById("user-avatar-initials").innerText = initials;

      addActivityLog(`${currentUser.id} updated their profile name to "${nameInput}".`, "info");
    }
  }
  showToast("toast_profile_updated", "success");
  playAudioTone("success");
}

function renderApprovalsQueue() {
  const tbody = document.getElementById("approvals-table-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const pendingRequests = requests.filter(r => r.status === "Pending");
  if (pendingRequests.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: var(--text-muted); padding: 20px;">${currentLang === 'en' ? 'No pending requests in queue.' : 'வரிசையில் நிலுவையிலுள்ள கோரிக்கைகள் எதுவும் இல்லை.'}</td></tr>`;
    return;
  }

  pendingRequests.forEach(req => {
    const student = users.find(u => u.id === req.studentId) || { name: req.studentId };
    const book = books.find(b => b.id === req.bookId) || { name: req.bookId };
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <strong>${student.name}</strong><br>
        <span class="code-font" style="font-size: 0.75rem; color: var(--text-muted)">${req.studentId}</span>
      </td>
      <td>
        <strong>${book.name}</strong><br>
        <span class="badge ${req.type === 'Reserve' ? 'badge-warning' : 'badge-student'}">${req.type}</span>
      </td>
      <td class="code-font">${formatDate(req.requestDate)}</td>
      <td>
        <div style="display: flex; gap: 8px;">
          <button class="btn btn-success btn-sm" onclick="approveRequest('${req.id}')" title="Approve">
            <i-lucide name="check" class="icon-sm"></i-lucide>
          </button>
          <button class="btn btn-danger btn-sm" onclick="declineRequest('${req.id}')" title="Decline">
            <i-lucide name="x" class="icon-sm"></i-lucide>
          </button>
        </div>
      </td>
    `;
    tbody.appendChild(tr);
  });
  lucide.createIcons();
}
