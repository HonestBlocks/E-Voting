package cultoftheunicorn.marvel;

import java.lang.System;

@kotlin.Metadata(mv = {1, 1, 13}, bv = {1, 0, 3}, k = 1, d1 = {"\u0000P\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u000e\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0010\b\n\u0000\u0018\u00002\u00020\u0001B\u0005\u00a2\u0006\u0002\u0010\u0002J\b\u0010\b\u001a\u00020\u0018H\u0002J\b\u0010\u000b\u001a\u00020\u0018H\u0002J\b\u0010\u0019\u001a\u00020\u0011H\u0002J\u0012\u0010\u001a\u001a\u00020\u001b2\b\u0010\u001c\u001a\u0004\u0018\u00010\u001dH\u0014J\u0006\u0010\u001e\u001a\u00020\u001bJ\b\u0010\u001f\u001a\u00020\u0011H\u0002J\u0010\u0010 \u001a\u00020\u001b2\u0006\u0010!\u001a\u00020\u0011H\u0002J\u0006\u0010\"\u001a\u00020\u001bJ\b\u0010#\u001a\u00020\u0011H\u0002J\f\u0010$\u001a\u00020\u0018*\u00020%H\u0002R\u0016\u0010\u0003\u001a\n \u0005*\u0004\u0018\u00010\u00040\u0004X\u0082\u0004\u00a2\u0006\u0002\n\u0000R\u0011\u0010\u0006\u001a\u00020\u0007\u00a2\u0006\b\n\u0000\u001a\u0004\b\b\u0010\tR\u0011\u0010\n\u001a\u00020\u0007\u00a2\u0006\b\n\u0000\u001a\u0004\b\u000b\u0010\tR\u0011\u0010\f\u001a\u00020\r\u00a2\u0006\b\n\u0000\u001a\u0004\b\f\u0010\u000eR\u0017\u0010\u000f\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0012\u0010\u0013R\u0017\u0010\u0014\u001a\b\u0012\u0004\u0012\u00020\u00110\u0010\u00a2\u0006\b\n\u0000\u001a\u0004\b\u0015\u0010\u0013R\u0010\u0010\u0016\u001a\u0004\u0018\u00010\u0017X\u0082\u000e\u00a2\u0006\u0002\n\u0000\u00a8\u0006&"}, d2 = {"Lcultoftheunicorn/marvel/EtherAct;", "Landroid/support/v7/app/AppCompatActivity;", "()V", "credentials", "Lorg/web3j/crypto/Credentials;", "kotlin.jvm.PlatformType", "gasLimit", "Landroid/databinding/ObservableInt;", "getGasLimit", "()Landroid/databinding/ObservableInt;", "gasPrice", "getGasPrice", "isLoading", "Landroid/databinding/ObservableBoolean;", "()Landroid/databinding/ObservableBoolean;", "textReadFromContract", "Landroid/databinding/ObservableField;", "", "getTextReadFromContract", "()Landroid/databinding/ObservableField;", "userText", "getUserText", "web3j", "Lorg/web3j/protocol/Web3j;", "Ljava/math/BigInteger;", "initializeWeb3J", "onCreate", "", "savedInstanceState", "Landroid/os/Bundle;", "readButtonClicked", "readFromContract", "toast", "text", "writeButtonClicked", "writeToContract", "bigInteger", "", "facerecognition_debug"})
public final class EtherAct extends android.support.v7.app.AppCompatActivity {
    @org.jetbrains.annotations.NotNull()
    private final android.databinding.ObservableBoolean isLoading = null;
    @org.jetbrains.annotations.NotNull()
    private final android.databinding.ObservableField<java.lang.String> textReadFromContract = null;
    @org.jetbrains.annotations.NotNull()
    private final android.databinding.ObservableInt gasPrice = null;
    @org.jetbrains.annotations.NotNull()
    private final android.databinding.ObservableField<java.lang.String> userText = null;
    @org.jetbrains.annotations.NotNull()
    private final android.databinding.ObservableInt gasLimit = null;
    private org.web3j.protocol.Web3j web3j;
    private final org.web3j.crypto.Credentials credentials = null;
    private java.util.HashMap _$_findViewCache;
    
    @org.jetbrains.annotations.NotNull()
    public final android.databinding.ObservableBoolean isLoading() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final android.databinding.ObservableField<java.lang.String> getTextReadFromContract() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final android.databinding.ObservableInt getGasPrice() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final android.databinding.ObservableField<java.lang.String> getUserText() {
        return null;
    }
    
    @org.jetbrains.annotations.NotNull()
    public final android.databinding.ObservableInt getGasLimit() {
        return null;
    }
    
    @java.lang.Override()
    protected void onCreate(@org.jetbrains.annotations.Nullable()
    android.os.Bundle savedInstanceState) {
    }
    
    public final void writeButtonClicked() {
    }
    
    public final void readButtonClicked() {
    }
    
    private final java.lang.String writeToContract() {
        return null;
    }
    
    private final java.lang.String readFromContract() {
        return null;
    }
    
    private final java.lang.String initializeWeb3J() {
        return null;
    }
    
    private final java.math.BigInteger getGasPrice() {
        return null;
    }
    
    private final java.math.BigInteger getGasLimit() {
        return null;
    }
    
    private final java.math.BigInteger bigInteger(int $receiver) {
        return null;
    }
    
    private final void toast(java.lang.String text) {
    }
    
    public EtherAct() {
        super();
    }
}