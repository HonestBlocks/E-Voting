package cultoftheunicorn.marvel.databinding;

import android.databinding.Bindable;
import android.databinding.DataBindingUtil;
import android.databinding.ViewDataBinding;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.SeekBar;
import cultoftheunicorn.marvel.EtherAct;
import java.lang.Deprecated;
import java.lang.Object;

public abstract class ActivityEtherBinding extends ViewDataBinding {
  @NonNull
  public final SeekBar gasLimitSeekBar;

  @NonNull
  public final SeekBar gasPriceSeekBar;

  @Bindable
  protected EtherAct mViewModel;

  protected ActivityEtherBinding(Object _bindingComponent, View _root, int _localFieldCount,
      SeekBar gasLimitSeekBar, SeekBar gasPriceSeekBar) {
    super(_bindingComponent, _root, _localFieldCount);
    this.gasLimitSeekBar = gasLimitSeekBar;
    this.gasPriceSeekBar = gasPriceSeekBar;
  }

  public abstract void setViewModel(@Nullable EtherAct viewModel);

  @Nullable
  public EtherAct getViewModel() {
    return mViewModel;
  }

  @NonNull
  public static ActivityEtherBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup root, boolean attachToRoot) {
    return inflate(inflater, root, attachToRoot, DataBindingUtil.getDefaultComponent());
  }

  /**
   * This method receives DataBindingComponent instance as type Object instead of
   * type DataBindingComponent to avoid causing too many compilation errors if
   * compilation fails for another reason.
   * https://issuetracker.google.com/issues/116541301
   * @Deprecated Use DataBindingUtil.inflate(inflater, R.layout.activity_ether, root, attachToRoot, component)
   */
  @NonNull
  @Deprecated
  public static ActivityEtherBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable ViewGroup root, boolean attachToRoot, @Nullable Object component) {
    return ViewDataBinding.<ActivityEtherBinding>inflateInternal(inflater, cultoftheunicorn.marvel.R.layout.activity_ether, root, attachToRoot, component);
  }

  @NonNull
  public static ActivityEtherBinding inflate(@NonNull LayoutInflater inflater) {
    return inflate(inflater, DataBindingUtil.getDefaultComponent());
  }

  /**
   * This method receives DataBindingComponent instance as type Object instead of
   * type DataBindingComponent to avoid causing too many compilation errors if
   * compilation fails for another reason.
   * https://issuetracker.google.com/issues/116541301
   * @Deprecated Use DataBindingUtil.inflate(inflater, R.layout.activity_ether, null, false, component)
   */
  @NonNull
  @Deprecated
  public static ActivityEtherBinding inflate(@NonNull LayoutInflater inflater,
      @Nullable Object component) {
    return ViewDataBinding.<ActivityEtherBinding>inflateInternal(inflater, cultoftheunicorn.marvel.R.layout.activity_ether, null, false, component);
  }

  public static ActivityEtherBinding bind(@NonNull View view) {
    return bind(view, DataBindingUtil.getDefaultComponent());
  }

  /**
   * This method receives DataBindingComponent instance as type Object instead of
   * type DataBindingComponent to avoid causing too many compilation errors if
   * compilation fails for another reason.
   * https://issuetracker.google.com/issues/116541301
   * @Deprecated Use DataBindingUtil.bind(view, component)
   */
  @Deprecated
  public static ActivityEtherBinding bind(@NonNull View view, @Nullable Object component) {
    return (ActivityEtherBinding)bind(component, view, cultoftheunicorn.marvel.R.layout.activity_ether);
  }
}
