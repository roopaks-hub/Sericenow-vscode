function onChange(control, oldValue, newValue, isLoading) {
   if (isLoading || !newValue) {
       return;
   }
   // Get reference field values using callback
   g_form.getReference('project_hosting_infrastructure', function(ref) {
       if (!ref) {
           return;
       }
       g_form.setValue('review_platform', ref.u_review_platform);
       g_form.setValue('review_platform_url', ref.u_review_platform_url);
       g_form.setValue('data_center_reference', ref.u_data_center_reference);
       //............
   });
}