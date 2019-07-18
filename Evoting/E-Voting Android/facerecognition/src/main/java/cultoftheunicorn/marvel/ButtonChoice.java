package cultoftheunicorn.marvel;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class ButtonChoice extends AppCompatActivity {

    public int value;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.button_choice);





            Button recognizeButton = (Button) findViewById(R.id.inti);
            Button trainingButton = (Button) findViewById(R.id.outi);

           /* recognizeButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {
                    value = 1;
                    startActivity(new Intent(ButtonChoice.this, Recognize.class));
                }
            });*/
           recognizeButton.setOnClickListener(new View.OnClickListener() {
               @Override
               public void onClick(View view) {

                   Toast.makeText(getBaseContext(), "Please Wait Scanner lcoming up...",
                           Toast.LENGTH_LONG).show();
                   value=1;
                   Intent intent= new Intent(ButtonChoice.this,Recognize.class);
                   intent.putExtra("Value",value);
                   startActivity(intent);


               }
           });

            trainingButton.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View view) {


                    Toast.makeText(getBaseContext(), "Please Wait Scanner coming up...",
                            Toast.LENGTH_LONG).show();
                    value=2;
                    Intent intent= new Intent(ButtonChoice.this,Recognize.class);
                    intent.putExtra("Value",value);
                    startActivity(intent);

                }
            });



        }
}
