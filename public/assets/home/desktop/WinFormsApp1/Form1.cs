using WinFormsApp1.Properties;

namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void numberInput_Leave(object sender, EventArgs e)
        {
            Bitmap personImage = Resources.ResourceManager.GetObject(numberInput.Text.Trim() + "-zdjecie") as Bitmap;
            Bitmap handImage = Resources.ResourceManager.GetObject(numberInput.Text.Trim() + "-odcisk") as Bitmap;

            if (personImage != null)
            {
                pictureBox1.Image = personImage;
            }
            else
            {
                pictureBox1.Image = null;
            }

            if (handImage != null)
            {
                pictureBox2.Image = handImage;
            }
            else
            {
                pictureBox2.Image = null;
            }


        }

        private void agreeBtn_Click(object sender, EventArgs e)
        {
            if (nameInput.Text != "" && lastNameInput.Text != "")
            {
                string eyeColor = "";
                foreach (RadioButton button in groupBox1.Controls)
                {
                    if (button.Checked)
                    {
                        eyeColor = button.Text;
                    }
                }

                MessageBox.Show(nameInput.Text + " " + lastNameInput.Text + " kolor oczu: " + eyeColor);
            }
        }
    }
}