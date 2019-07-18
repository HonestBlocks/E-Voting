package cultoftheunicorn.marvel.databinding;
import cultoftheunicorn.marvel.R;
import cultoftheunicorn.marvel.BR;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.View;
@SuppressWarnings("unchecked")
public class ActivityEtherBindingImpl extends ActivityEtherBinding implements cultoftheunicorn.marvel.generated.callback.OnClickListener.Listener {

    @Nullable
    private static final android.databinding.ViewDataBinding.IncludedLayouts sIncludes;
    @Nullable
    private static final android.util.SparseIntArray sViewsWithIds;
    static {
        sIncludes = null;
        sViewsWithIds = null;
    }
    // views
    @NonNull
    private final android.widget.LinearLayout mboundView0;
    @NonNull
    private final android.widget.EditText mboundView1;
    @NonNull
    private final android.widget.Button mboundView2;
    @NonNull
    private final android.widget.Button mboundView3;
    @NonNull
    private final android.widget.TextView mboundView4;
    @NonNull
    private final android.widget.ProgressBar mboundView5;
    @NonNull
    private final android.widget.TextView mboundView6;
    @NonNull
    private final android.widget.TextView mboundView8;
    // variables
    @Nullable
    private final android.view.View.OnClickListener mCallback2;
    @Nullable
    private final android.view.View.OnClickListener mCallback1;
    // values
    // listeners
    // Inverse Binding Event Handlers
    private android.databinding.InverseBindingListener gasLimitSeekBarandroidProgressAttrChanged = new android.databinding.InverseBindingListener() {
        @Override
        public void onChange() {
            // Inverse of viewModel.gasLimit.get()
            //         is viewModel.gasLimit.set((int) callbackArg_0)
            int callbackArg_0 = gasLimitSeekBar.getProgress();
            // localize variables for thread safety
            // viewModel.gasLimit
            android.databinding.ObservableInt viewModelGasLimit = null;
            // viewModel
            cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;
            // viewModel != null
            boolean viewModelJavaLangObjectNull = false;
            // viewModel.gasLimit.get()
            int viewModelGasLimitGet = 0;
            // viewModel.gasLimit != null
            boolean viewModelGasLimitJavaLangObjectNull = false;



            viewModelJavaLangObjectNull = (viewModel) != (null);
            if (viewModelJavaLangObjectNull) {


                viewModelGasLimit = viewModel.getGasLimit();

                viewModelGasLimitJavaLangObjectNull = (viewModelGasLimit) != (null);
                if (viewModelGasLimitJavaLangObjectNull) {




                    viewModelGasLimit.set(((int) (callbackArg_0)));
                }
            }
        }
    };
    private android.databinding.InverseBindingListener gasPriceSeekBarandroidProgressAttrChanged = new android.databinding.InverseBindingListener() {
        @Override
        public void onChange() {
            // Inverse of viewModel.gasPrice.get()
            //         is viewModel.gasPrice.set((int) callbackArg_0)
            int callbackArg_0 = gasPriceSeekBar.getProgress();
            // localize variables for thread safety
            // viewModel.gasPrice.get()
            int viewModelGasPriceGet = 0;
            // viewModel.gasPrice
            android.databinding.ObservableInt viewModelGasPrice = null;
            // viewModel.gasPrice != null
            boolean viewModelGasPriceJavaLangObjectNull = false;
            // viewModel
            cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;
            // viewModel != null
            boolean viewModelJavaLangObjectNull = false;



            viewModelJavaLangObjectNull = (viewModel) != (null);
            if (viewModelJavaLangObjectNull) {


                viewModelGasPrice = viewModel.getGasPrice();

                viewModelGasPriceJavaLangObjectNull = (viewModelGasPrice) != (null);
                if (viewModelGasPriceJavaLangObjectNull) {




                    viewModelGasPrice.set(((int) (callbackArg_0)));
                }
            }
        }
    };
    private android.databinding.InverseBindingListener mboundView1androidTextAttrChanged = new android.databinding.InverseBindingListener() {
        @Override
        public void onChange() {
            // Inverse of viewModel.userText.get()
            //         is viewModel.userText.set((java.lang.String) callbackArg_0)
            java.lang.String callbackArg_0 = android.databinding.adapters.TextViewBindingAdapter.getTextString(mboundView1);
            // localize variables for thread safety
            // viewModel.userText
            android.databinding.ObservableField<java.lang.String> viewModelUserText = null;
            // viewModel.userText != null
            boolean viewModelUserTextJavaLangObjectNull = false;
            // viewModel.userText.get()
            java.lang.String viewModelUserTextGet = null;
            // viewModel
            cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;
            // viewModel != null
            boolean viewModelJavaLangObjectNull = false;



            viewModelJavaLangObjectNull = (viewModel) != (null);
            if (viewModelJavaLangObjectNull) {


                viewModelUserText = viewModel.getUserText();

                viewModelUserTextJavaLangObjectNull = (viewModelUserText) != (null);
                if (viewModelUserTextJavaLangObjectNull) {




                    viewModelUserText.set(((java.lang.String) (callbackArg_0)));
                }
            }
        }
    };

    public ActivityEtherBindingImpl(@Nullable android.databinding.DataBindingComponent bindingComponent, @NonNull View root) {
        this(bindingComponent, root, mapBindings(bindingComponent, root, 10, sIncludes, sViewsWithIds));
    }
    private ActivityEtherBindingImpl(android.databinding.DataBindingComponent bindingComponent, View root, Object[] bindings) {
        super(bindingComponent, root, 5
            , (android.widget.SeekBar) bindings[9]
            , (android.widget.SeekBar) bindings[7]
            );
        this.gasLimitSeekBar.setTag(null);
        this.gasPriceSeekBar.setTag(null);
        this.mboundView0 = (android.widget.LinearLayout) bindings[0];
        this.mboundView0.setTag(null);
        this.mboundView1 = (android.widget.EditText) bindings[1];
        this.mboundView1.setTag(null);
        this.mboundView2 = (android.widget.Button) bindings[2];
        this.mboundView2.setTag(null);
        this.mboundView3 = (android.widget.Button) bindings[3];
        this.mboundView3.setTag(null);
        this.mboundView4 = (android.widget.TextView) bindings[4];
        this.mboundView4.setTag(null);
        this.mboundView5 = (android.widget.ProgressBar) bindings[5];
        this.mboundView5.setTag(null);
        this.mboundView6 = (android.widget.TextView) bindings[6];
        this.mboundView6.setTag(null);
        this.mboundView8 = (android.widget.TextView) bindings[8];
        this.mboundView8.setTag(null);
        setRootTag(root);
        // listeners
        mCallback2 = new cultoftheunicorn.marvel.generated.callback.OnClickListener(this, 2);
        mCallback1 = new cultoftheunicorn.marvel.generated.callback.OnClickListener(this, 1);
        invalidateAll();
    }

    @Override
    public void invalidateAll() {
        synchronized(this) {
                mDirtyFlags = 0x40L;
        }
        requestRebind();
    }

    @Override
    public boolean hasPendingBindings() {
        synchronized(this) {
            if (mDirtyFlags != 0) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean setVariable(int variableId, @Nullable Object variable)  {
        boolean variableSet = true;
        if (BR.viewModel == variableId) {
            setViewModel((cultoftheunicorn.marvel.EtherAct) variable);
        }
        else {
            variableSet = false;
        }
            return variableSet;
    }

    public void setViewModel(@Nullable cultoftheunicorn.marvel.EtherAct ViewModel) {
        this.mViewModel = ViewModel;
        synchronized(this) {
            mDirtyFlags |= 0x20L;
        }
        notifyPropertyChanged(BR.viewModel);
        super.requestRebind();
    }

    @Override
    protected boolean onFieldChange(int localFieldId, Object object, int fieldId) {
        switch (localFieldId) {
            case 0 :
                return onChangeViewModelGasLimit((android.databinding.ObservableInt) object, fieldId);
            case 1 :
                return onChangeViewModelGasPrice((android.databinding.ObservableInt) object, fieldId);
            case 2 :
                return onChangeViewModelTextReadFromContract((android.databinding.ObservableField<java.lang.String>) object, fieldId);
            case 3 :
                return onChangeViewModelUserText((android.databinding.ObservableField<java.lang.String>) object, fieldId);
            case 4 :
                return onChangeViewModelIsLoading((android.databinding.ObservableBoolean) object, fieldId);
        }
        return false;
    }
    private boolean onChangeViewModelGasLimit(android.databinding.ObservableInt ViewModelGasLimit, int fieldId) {
        if (fieldId == BR._all) {
            synchronized(this) {
                    mDirtyFlags |= 0x1L;
            }
            return true;
        }
        return false;
    }
    private boolean onChangeViewModelGasPrice(android.databinding.ObservableInt ViewModelGasPrice, int fieldId) {
        if (fieldId == BR._all) {
            synchronized(this) {
                    mDirtyFlags |= 0x2L;
            }
            return true;
        }
        return false;
    }
    private boolean onChangeViewModelTextReadFromContract(android.databinding.ObservableField<java.lang.String> ViewModelTextReadFromContract, int fieldId) {
        if (fieldId == BR._all) {
            synchronized(this) {
                    mDirtyFlags |= 0x4L;
            }
            return true;
        }
        return false;
    }
    private boolean onChangeViewModelUserText(android.databinding.ObservableField<java.lang.String> ViewModelUserText, int fieldId) {
        if (fieldId == BR._all) {
            synchronized(this) {
                    mDirtyFlags |= 0x8L;
            }
            return true;
        }
        return false;
    }
    private boolean onChangeViewModelIsLoading(android.databinding.ObservableBoolean ViewModelIsLoading, int fieldId) {
        if (fieldId == BR._all) {
            synchronized(this) {
                    mDirtyFlags |= 0x10L;
            }
            return true;
        }
        return false;
    }

    @Override
    protected void executeBindings() {
        long dirtyFlags = 0;
        synchronized(this) {
            dirtyFlags = mDirtyFlags;
            mDirtyFlags = 0;
        }
        java.lang.String stringFormatMboundView6AndroidStringGasPriceViewModelGasPrice = null;
        int viewModelGasPriceGet = 0;
        android.databinding.ObservableInt viewModelGasLimit = null;
        java.lang.String stringFormatMboundView8AndroidStringGasLimitViewModelGasLimit = null;
        boolean viewModelIsLoadingGet = false;
        int viewModelGasLimitGet = 0;
        android.databinding.ObservableInt viewModelGasPrice = null;
        int viewModelIsLoadingViewVISIBLEViewINVISIBLE = 0;
        java.lang.String viewModelUserTextGet = null;
        android.databinding.ObservableField<java.lang.String> viewModelTextReadFromContract = null;
        android.databinding.ObservableField<java.lang.String> viewModelUserText = null;
        java.lang.String viewModelTextReadFromContractGet = null;
        android.databinding.ObservableBoolean viewModelIsLoading = null;
        cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;

        if ((dirtyFlags & 0x7fL) != 0) {


            if ((dirtyFlags & 0x61L) != 0) {

                    if (viewModel != null) {
                        // read viewModel.gasLimit
                        viewModelGasLimit = viewModel.getGasLimit();
                    }
                    updateRegistration(0, viewModelGasLimit);


                    if (viewModelGasLimit != null) {
                        // read viewModel.gasLimit.get()
                        viewModelGasLimitGet = viewModelGasLimit.get();
                    }


                    // read String.format(@android:string/gas_limit, viewModel.gasLimit.get())
                    stringFormatMboundView8AndroidStringGasLimitViewModelGasLimit = java.lang.String.format(mboundView8.getResources().getString(R.string.gas_limit), viewModelGasLimitGet);
            }
            if ((dirtyFlags & 0x62L) != 0) {

                    if (viewModel != null) {
                        // read viewModel.gasPrice
                        viewModelGasPrice = viewModel.getGasPrice();
                    }
                    updateRegistration(1, viewModelGasPrice);


                    if (viewModelGasPrice != null) {
                        // read viewModel.gasPrice.get()
                        viewModelGasPriceGet = viewModelGasPrice.get();
                    }


                    // read String.format(@android:string/gas_price, viewModel.gasPrice.get())
                    stringFormatMboundView6AndroidStringGasPriceViewModelGasPrice = java.lang.String.format(mboundView6.getResources().getString(R.string.gas_price), viewModelGasPriceGet);
            }
            if ((dirtyFlags & 0x64L) != 0) {

                    if (viewModel != null) {
                        // read viewModel.textReadFromContract
                        viewModelTextReadFromContract = viewModel.getTextReadFromContract();
                    }
                    updateRegistration(2, viewModelTextReadFromContract);


                    if (viewModelTextReadFromContract != null) {
                        // read viewModel.textReadFromContract.get()
                        viewModelTextReadFromContractGet = viewModelTextReadFromContract.get();
                    }
            }
            if ((dirtyFlags & 0x68L) != 0) {

                    if (viewModel != null) {
                        // read viewModel.userText
                        viewModelUserText = viewModel.getUserText();
                    }
                    updateRegistration(3, viewModelUserText);


                    if (viewModelUserText != null) {
                        // read viewModel.userText.get()
                        viewModelUserTextGet = viewModelUserText.get();
                    }
            }
            if ((dirtyFlags & 0x70L) != 0) {

                    if (viewModel != null) {
                        // read viewModel.isLoading
                        viewModelIsLoading = viewModel.isLoading();
                    }
                    updateRegistration(4, viewModelIsLoading);


                    if (viewModelIsLoading != null) {
                        // read viewModel.isLoading.get()
                        viewModelIsLoadingGet = viewModelIsLoading.get();
                    }
                if((dirtyFlags & 0x70L) != 0) {
                    if(viewModelIsLoadingGet) {
                            dirtyFlags |= 0x100L;
                    }
                    else {
                            dirtyFlags |= 0x80L;
                    }
                }


                    // read viewModel.isLoading.get() ? View.VISIBLE : View.INVISIBLE
                    viewModelIsLoadingViewVISIBLEViewINVISIBLE = ((viewModelIsLoadingGet) ? (android.view.View.VISIBLE) : (android.view.View.INVISIBLE));
            }
        }
        // batch finished
        if ((dirtyFlags & 0x61L) != 0) {
            // api target 1

            android.databinding.adapters.SeekBarBindingAdapter.setProgress(this.gasLimitSeekBar, viewModelGasLimitGet);
            android.databinding.adapters.TextViewBindingAdapter.setText(this.mboundView8, stringFormatMboundView8AndroidStringGasLimitViewModelGasLimit);
        }
        if ((dirtyFlags & 0x40L) != 0) {
            // api target 1

            android.databinding.adapters.SeekBarBindingAdapter.setOnSeekBarChangeListener(this.gasLimitSeekBar, (android.databinding.adapters.SeekBarBindingAdapter.OnStartTrackingTouch)null, (android.databinding.adapters.SeekBarBindingAdapter.OnStopTrackingTouch)null, (android.databinding.adapters.SeekBarBindingAdapter.OnProgressChanged)null, gasLimitSeekBarandroidProgressAttrChanged);
            android.databinding.adapters.SeekBarBindingAdapter.setOnSeekBarChangeListener(this.gasPriceSeekBar, (android.databinding.adapters.SeekBarBindingAdapter.OnStartTrackingTouch)null, (android.databinding.adapters.SeekBarBindingAdapter.OnStopTrackingTouch)null, (android.databinding.adapters.SeekBarBindingAdapter.OnProgressChanged)null, gasPriceSeekBarandroidProgressAttrChanged);
            android.databinding.adapters.TextViewBindingAdapter.setTextWatcher(this.mboundView1, (android.databinding.adapters.TextViewBindingAdapter.BeforeTextChanged)null, (android.databinding.adapters.TextViewBindingAdapter.OnTextChanged)null, (android.databinding.adapters.TextViewBindingAdapter.AfterTextChanged)null, mboundView1androidTextAttrChanged);
            this.mboundView2.setOnClickListener(mCallback1);
            this.mboundView3.setOnClickListener(mCallback2);
        }
        if ((dirtyFlags & 0x62L) != 0) {
            // api target 1

            android.databinding.adapters.SeekBarBindingAdapter.setProgress(this.gasPriceSeekBar, viewModelGasPriceGet);
            android.databinding.adapters.TextViewBindingAdapter.setText(this.mboundView6, stringFormatMboundView6AndroidStringGasPriceViewModelGasPrice);
        }
        if ((dirtyFlags & 0x68L) != 0) {
            // api target 1

            android.databinding.adapters.TextViewBindingAdapter.setText(this.mboundView1, viewModelUserTextGet);
        }
        if ((dirtyFlags & 0x64L) != 0) {
            // api target 1

            android.databinding.adapters.TextViewBindingAdapter.setText(this.mboundView4, viewModelTextReadFromContractGet);
        }
        if ((dirtyFlags & 0x70L) != 0) {
            // api target 1

            this.mboundView5.setVisibility(viewModelIsLoadingViewVISIBLEViewINVISIBLE);
        }
    }
    // Listener Stub Implementations
    // callback impls
    public final void _internalCallbackOnClick(int sourceId , android.view.View callbackArg_0) {
        switch(sourceId) {
            case 2: {
                // localize variables for thread safety
                // viewModel
                cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;
                // viewModel != null
                boolean viewModelJavaLangObjectNull = false;



                viewModelJavaLangObjectNull = (viewModel) != (null);
                if (viewModelJavaLangObjectNull) {


                    viewModel.readButtonClicked();
                }
                break;
            }
            case 1: {
                // localize variables for thread safety
                // viewModel
                cultoftheunicorn.marvel.EtherAct viewModel = mViewModel;
                // viewModel != null
                boolean viewModelJavaLangObjectNull = false;



                viewModelJavaLangObjectNull = (viewModel) != (null);
                if (viewModelJavaLangObjectNull) {


                    viewModel.writeButtonClicked();
                }
                break;
            }
        }
    }
    // dirty flag
    private  long mDirtyFlags = 0xffffffffffffffffL;
    /* flag mapping
        flag 0 (0x1L): viewModel.gasLimit
        flag 1 (0x2L): viewModel.gasPrice
        flag 2 (0x3L): viewModel.textReadFromContract
        flag 3 (0x4L): viewModel.userText
        flag 4 (0x5L): viewModel.isLoading
        flag 5 (0x6L): viewModel
        flag 6 (0x7L): null
        flag 7 (0x8L): viewModel.isLoading.get() ? View.VISIBLE : View.INVISIBLE
        flag 8 (0x9L): viewModel.isLoading.get() ? View.VISIBLE : View.INVISIBLE
    flag mapping end*/
    //end
}