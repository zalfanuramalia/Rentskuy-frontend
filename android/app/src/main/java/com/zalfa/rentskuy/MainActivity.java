package com.zalfa.rentskuy;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
// import com.zoontek.rnbootsplash.RNBootSplash;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is
   * used to schedule
   * rendering of the component.
   */
  // @Override
  // protected void loadApp(String appKey) {
  //   RNBootSplash.init(getPlainActivity()); // <- initialize the splash screen
  //   super.loadApp(appKey);
  // }

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }

  @Override
  protected String getMainComponentName() {
    return "Rentskuy";
  }
}
