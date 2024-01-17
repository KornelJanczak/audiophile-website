namespace WinFormsApp1
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            numberLabel = new Label();
            lastNameLabel = new Label();
            nameLabel = new Label();
            numberInput = new TextBox();
            lastNameInput = new TextBox();
            nameInput = new TextBox();
            groupBox1 = new GroupBox();
            radioButtonGreen = new RadioButton();
            Piwne = new RadioButton();
            radioButtonBlue = new RadioButton();
            pictureBox1 = new PictureBox();
            pictureBox2 = new PictureBox();
            agreeBtn = new Button();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).BeginInit();
            ((System.ComponentModel.ISupportInitialize)pictureBox2).BeginInit();
            SuspendLayout();
            // 
            // numberLabel
            // 
            numberLabel.AutoSize = true;
            numberLabel.Location = new Point(40, 39);
            numberLabel.Name = "numberLabel";
            numberLabel.Size = new Size(44, 15);
            numberLabel.TabIndex = 0;
            numberLabel.Text = "Numer";
            // 
            // lastNameLabel
            // 
            lastNameLabel.AutoSize = true;
            lastNameLabel.Location = new Point(40, 137);
            lastNameLabel.Name = "lastNameLabel";
            lastNameLabel.Size = new Size(57, 15);
            lastNameLabel.TabIndex = 1;
            lastNameLabel.Text = "Nazwisko";
            // 
            // nameLabel
            // 
            nameLabel.AutoSize = true;
            nameLabel.Location = new Point(40, 85);
            nameLabel.Name = "nameLabel";
            nameLabel.Size = new Size(30, 15);
            nameLabel.TabIndex = 2;
            nameLabel.Text = "Imię";
            // 
            // numberInput
            // 
            numberInput.BackColor = Color.Azure;
            numberInput.Location = new Point(123, 31);
            numberInput.Name = "numberInput";
            numberInput.Size = new Size(248, 23);
            numberInput.TabIndex = 3;
            numberInput.Leave += numberInput_Leave;
            // 
            // lastNameInput
            // 
            lastNameInput.BackColor = Color.Azure;
            lastNameInput.Location = new Point(123, 129);
            lastNameInput.Name = "lastNameInput";
            lastNameInput.Size = new Size(248, 23);
            lastNameInput.TabIndex = 4;
            // 
            // nameInput
            // 
            nameInput.BackColor = Color.Azure;
            nameInput.Location = new Point(123, 77);
            nameInput.Name = "nameInput";
            nameInput.Size = new Size(248, 23);
            nameInput.TabIndex = 5;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(radioButtonGreen);
            groupBox1.Controls.Add(Piwne);
            groupBox1.Controls.Add(radioButtonBlue);
            groupBox1.Location = new Point(40, 196);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(331, 204);
            groupBox1.TabIndex = 6;
            groupBox1.TabStop = false;
            groupBox1.Text = "Kolor oczu";
            // 
            // radioButtonGreen
            // 
            radioButtonGreen.AutoSize = true;
            radioButtonGreen.Location = new Point(22, 88);
            radioButtonGreen.Name = "radioButtonGreen";
            radioButtonGreen.Size = new Size(64, 19);
            radioButtonGreen.TabIndex = 2;
            radioButtonGreen.Text = "Zielone";
            radioButtonGreen.UseVisualStyleBackColor = true;
            // 
            // Piwne
            // 
            Piwne.Checked = true;
            Piwne.Location = new Point(22, 140);
            Piwne.Name = "Piwne";
            Piwne.Size = new Size(57, 19);
            Piwne.TabIndex = 1;
            Piwne.TabStop = true;
            Piwne.Text = "Piwne";
            Piwne.UseVisualStyleBackColor = true;
            // 
            // radioButtonBlue
            // 
            radioButtonBlue.AutoSize = true;
            radioButtonBlue.Location = new Point(22, 39);
            radioButtonBlue.Name = "radioButtonBlue";
            radioButtonBlue.Size = new Size(79, 19);
            radioButtonBlue.TabIndex = 0;
            radioButtonBlue.Text = "Niebieskie";
            radioButtonBlue.UseVisualStyleBackColor = true;
            // 
            // pictureBox1
            // 
            pictureBox1.Image = Properties.Resources._000_zdjecie;
            pictureBox1.Location = new Point(398, 31);
            pictureBox1.Name = "pictureBox1";
            pictureBox1.Size = new Size(188, 264);
            pictureBox1.TabIndex = 7;
            pictureBox1.TabStop = false;
            // 
            // pictureBox2
            // 
            pictureBox2.Image = Properties.Resources._000_odcisk;
            pictureBox2.Location = new Point(604, 31);
            pictureBox2.Name = "pictureBox2";
            pictureBox2.Size = new Size(165, 264);
            pictureBox2.TabIndex = 8;
            pictureBox2.TabStop = false;
            // 
            // agreeBtn
            // 
            agreeBtn.BackColor = Color.Azure;
            agreeBtn.Location = new Point(410, 350);
            agreeBtn.Name = "agreeBtn";
            agreeBtn.Size = new Size(359, 50);
            agreeBtn.TabIndex = 9;
            agreeBtn.Text = "OK";
            agreeBtn.UseVisualStyleBackColor = false;
            agreeBtn.Click += agreeBtn_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 15F);
            AutoScaleMode = AutoScaleMode.Font;
            BackColor = Color.CadetBlue;
            ClientSize = new Size(800, 423);
            Controls.Add(agreeBtn);
            Controls.Add(pictureBox2);
            Controls.Add(pictureBox1);
            Controls.Add(groupBox1);
            Controls.Add(nameInput);
            Controls.Add(lastNameInput);
            Controls.Add(numberInput);
            Controls.Add(nameLabel);
            Controls.Add(lastNameLabel);
            Controls.Add(numberLabel);
            Name = "Form1";
            Text = "Form1";
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)pictureBox1).EndInit();
            ((System.ComponentModel.ISupportInitialize)pictureBox2).EndInit();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Label numberLabel;
        private Label lastNameLabel;
        private Label nameLabel;
        private TextBox numberInput;
        private TextBox lastNameInput;
        private TextBox nameInput;
        private GroupBox groupBox1;
        private RadioButton radioButtonGreen;
        private RadioButton Piwne;
        private RadioButton radioButtonBlue;
        private PictureBox pictureBox1;
        private PictureBox pictureBox2;
        private Button agreeBtn;
    }
}