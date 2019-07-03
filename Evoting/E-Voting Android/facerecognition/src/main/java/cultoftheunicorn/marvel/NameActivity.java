package cultoftheunicorn.marvel;

import android.content.Intent;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.mongodb.DB;
import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.Iterator;
import java.util.Set;

import javax.net.ssl.HttpsURLConnection;

//import org.opencv.cultoftheunicorn.marvel.R;

public class NameActivity extends AppCompatActivity {
    int Value;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_name);

        final EditText name = (EditText) findViewById(R.id.name);
        final EditText age = (EditText)findViewById(R.id.editText);
        final EditText voterid = (EditText)findViewById(R.id.editText2);
        Button nextButton = (Button) findViewById(R.id.nextButton);
        final int [] arr = {11111234,11111235,11111236,11111237,11111238,11111239};



        nextButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {


                String value= age.getText().toString();
                final int finalValue=Integer.parseInt(value);
                String value1=voterid.getText().toString();
                final int finalValue1=Integer.parseInt(value1);

                if(finalValue<18)
                    Toast.makeText(NameActivity.this, "Age of the Voter should be above 18", Toast.LENGTH_LONG).show();
                else if(voterid.getText().toString().equals(""))
                {
                    Toast.makeText(NameActivity.this, "A Voter ID Should be an 8 Digit Number", Toast.LENGTH_LONG).show();
                }
               else if(name.getText().toString().equals("")) {
                    Toast.makeText(NameActivity.this, "Enter the Name", Toast.LENGTH_LONG).show();
                }
                else {
                    int flag=1;
                    for(int i=0;i<6;i++)
                    {
                        if(arr[i]==finalValue1)
                        {
                     flag=0;
                     break;
                        }
                    }

if(flag==0) {
Toast.makeText(NameActivity.this,"Verified User",Toast.LENGTH_LONG).show();





    Intent intent = new Intent(NameActivity.this, Training.class);
    intent.putExtra("name", name.getText().toString().trim());
    intent.putExtra("age", age.getText().toString().trim());
    intent.putExtra("voterid", voterid.getText().toString().trim());
    startActivity(intent);
}
else
{
    Toast.makeText(NameActivity.this,"Not a verified Voter ID",Toast.LENGTH_LONG).show();
}
                }
            }
        });

    }


}
