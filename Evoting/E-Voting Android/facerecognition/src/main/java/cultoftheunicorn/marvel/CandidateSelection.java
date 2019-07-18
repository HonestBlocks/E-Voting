package cultoftheunicorn.marvel;
import android.app.Activity;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.Toast;
import android.databinding.*;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.math.BigInteger;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Iterator;

import javax.net.ssl.HttpsURLConnection;

public class CandidateSelection extends AppCompatActivity {

    private RadioGroup radioSexGroup;
    private RadioButton radioSexButton;
    private Button btnDisplay;
    String Value;







    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_candidates);

      //  String result = initializeWeb3J();

        addListenerOnButton();

    }
    @Override
    public void onBackPressed()
    {
        Toast.makeText(CandidateSelection.this,
                "You can't go back at this Stage, Please select your Party.", Toast.LENGTH_LONG).show();

    }

    public void addListenerOnButton() {

        radioSexGroup = (RadioGroup) findViewById(R.id.radioSex);
        btnDisplay = (Button) findViewById(R.id.btnDisplay);

        btnDisplay.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {

                // get selected radio button from radioGroup
                int selectedId = radioSexGroup.getCheckedRadioButtonId();

                // find the radiobutton by returned id
                radioSexButton = (RadioButton) findViewById(selectedId);

//                new SendRequest().execute();


Value= radioSexButton.getText().toString();



                Toast.makeText(CandidateSelection.this,
                        "Please press CONFIRM Button to Confirm your Vote", Toast.LENGTH_SHORT).show();


                Intent intent = new Intent(CandidateSelection.this, EtherAct.class);
                intent.putExtra("Choice",Value);
                startActivity(intent);



            }

        });

    }



}
