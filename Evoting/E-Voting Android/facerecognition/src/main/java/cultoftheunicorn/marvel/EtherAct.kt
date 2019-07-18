//package com.noev.ethereumhelloworld
package cultoftheunicorn.marvel
import android.databinding.*
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import android.widget.*
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.web3j.crypto.Credentials
import org.web3j.protocol.Web3j
import org.web3j.protocol.http.HttpService
import java.math.BigInteger
import java.util.concurrent.TimeUnit

const val MINIMUM_GAS_LIMIT = 105000
const val PRIVATE_KEY_ROPSTEN = "0924610925CF327F59AB869AA54D65A3B02579D9998BAB56AD52314A06E8BBB8" //todo: You have to create an ethereum account on the Ropsten network and put your private key here
const val ROPSTEN_INFURA_URL = "https://rinkeby.infura.io/v3/0afa3dd654eb4a82b6e4efe9f9cd3d2c" //todo: You have to register on the Infura website and put your api key here
const val CONTRACT_ADDRESS = "0x7e67bacd3fe12f89570e28a5138be23d5fbb0462"

class EtherAct : AppCompatActivity() {

    val isLoading = ObservableBoolean()
    val textReadFromContract = ObservableField<String>()
    val gasPrice = ObservableInt(60)
    val userText = ObservableField<String>()
    val gasLimit = ObservableInt(MINIMUM_GAS_LIMIT)

    private var web3j: Web3j? = null

    private val credentials = Credentials.create(PRIVATE_KEY_ROPSTEN)

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val binding = DataBindingUtil.setContentView<ViewDataBinding>(this, R.layout.activity_ether)
        binding.setVariable(BR.viewModel, this)

        CoroutineScope(Dispatchers.Main).launch(Dispatchers.IO) {
            isLoading.set(true)
            val result = initializeWeb3J()
            isLoading.set(false)
            toast(result)
        }
    }

    fun writeButtonClicked() {
        CoroutineScope(Dispatchers.Main).launch(Dispatchers.IO) {
            isLoading.set(true)
            val result = writeToContract()
           isLoading.set(false)
            toast(result)
        }
    }

    fun readButtonClicked() {
        CoroutineScope(Dispatchers.Main).launch(Dispatchers.IO) {
            isLoading.set(true)
            val result = readFromContract()
            isLoading.set(false)
            textReadFromContract.set(result)
        }
    }


    /*  fun toBigIntegerOrNull(abc : String?): BigInteger?
      {
          return abc.toBigInteger()
         //  return abc;
      }*/

    private fun writeToContract(): String {
        var greetingToWrite : String = userText.get().toString()

        var b :String = intent.getStringExtra("Choice")

     greetingToWrite=b
        var a : BigInteger = BigInteger("3")
      if(greetingToWrite=="BJP")
          a = BigInteger("0")
       else if(greetingToWrite=="CONGRESS")
          a= BigInteger("2")
        else if(greetingToWrite=="AAP")
          a=BigInteger("1")


        //var greetingToWrite = userText.get()

        // var a = toBigIntegerOrNull(greetingToWrite)

        // greetingToWrite=greetingToWrite.toInt()
      //  var a : BigInteger? = greetingToWrite.toBigInteger()
        //a=null
        //a= greetingToWrite.toInt()
        // var a= BigInteger?


        var result: String
        result = try {
            val Election1 = Election.load(CONTRACT_ADDRESS,web3j,credentials,getGasPrice(),getGasLimit())
            val greeter = Greeter.load(CONTRACT_ADDRESS, web3j, credentials, getGasPrice(), getGasLimit())
            //   fun String.toBigInteger(): BigInteger
            //   var a=greetingToWrite.toBigInteger()

            val transactionReceipt = Election1.vote(a).sendAsync().get(3, TimeUnit.MINUTES)
            "Successful transaction. Gas used: " + transactionReceipt.gasUsed
        } catch (e: Exception) {
            "Error during transaction. Error: " + e.message
        }
        if(result.endsWith("(not-enough gas?)"))
            result = "You have Already Voted."
        return result
    }

    private fun readFromContract(): String {
        val result: String
        result = try {
            val greeter = Greeter.load(CONTRACT_ADDRESS, web3j, credentials, getGasPrice(), getGasLimit())
            val greeting = greeter.greet().sendAsync()
            greeting.get()
        } catch (e: Exception) {
            "Error reading the smart contract. Error: " + e.message
        }
        return result
    }

    private fun initializeWeb3J(): String {
        val infuraHttpService: HttpService
        val result: String
        result = try {
            infuraHttpService = HttpService(ROPSTEN_INFURA_URL)
            web3j = Web3j.build(infuraHttpService)
            "Please press CONFIRM Button to Confirm your Vote"
        } catch (e: Exception) {
            val exception = e.toString()
            "Error initializing web3j/infura. Error: $exception"
        }

        return result
    }

    private fun getGasPrice(): BigInteger {
        val gasPriceGwei = gasPrice.get()
        val gasPriceWei = BigInteger.valueOf(gasPriceGwei + 1000000000L)
        Log.d("wat", "getGasPrice: $gasPriceGwei")
        return gasPriceWei
    }

    private fun getGasLimit(): BigInteger {
        return gasLimit.get().bigInteger()
    }

    private fun Int.bigInteger(): BigInteger {
        return BigInteger(toString())
    }

    private fun toast(text: String) {
        runOnUiThread {
            Toast.makeText(this, text, Toast.LENGTH_LONG).show()
        }
    }
}
