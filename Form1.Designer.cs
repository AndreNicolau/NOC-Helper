namespace DescriptionHelper
{
    partial class DescriptionHelper
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
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
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(DescriptionHelper));
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.txtNomeTecnico = new System.Windows.Forms.TextBox();
            this.txtContactoTecnico = new System.Windows.Forms.TextBox();
            this.txtDescricao = new System.Windows.Forms.RichTextBox();
            this.btnCopy = new System.Windows.Forms.Button();
            this.btnAfetacaoDispersa = new System.Windows.Forms.Button();
            this.flowLayoutPanel1 = new System.Windows.Forms.FlowLayoutPanel();
            this.btnEmAnalise = new System.Windows.Forms.Button();
            this.CountDown = new System.Windows.Forms.Timer(this.components);
            this.flowLayoutPanel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label1.AutoSize = true;
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(13, 23);
            this.label1.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(109, 16);
            this.label1.TabIndex = 0;
            this.label1.Text = "Nome do técnico";
            // 
            // label2
            // 
            this.label2.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.label2.AutoSize = true;
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(187, 23);
            this.label2.Margin = new System.Windows.Forms.Padding(4, 0, 4, 0);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(60, 16);
            this.label2.TabIndex = 1;
            this.label2.Text = "Contacto";
            // 
            // txtNomeTecnico
            // 
            this.txtNomeTecnico.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.txtNomeTecnico.Location = new System.Drawing.Point(16, 43);
            this.txtNomeTecnico.Margin = new System.Windows.Forms.Padding(4);
            this.txtNomeTecnico.Name = "txtNomeTecnico";
            this.txtNomeTecnico.Size = new System.Drawing.Size(131, 22);
            this.txtNomeTecnico.TabIndex = 2;
            this.txtNomeTecnico.TextChanged += new System.EventHandler(this.textBox1_TextChanged);
            // 
            // txtContactoTecnico
            // 
            this.txtContactoTecnico.Anchor = ((System.Windows.Forms.AnchorStyles)(((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left)));
            this.txtContactoTecnico.Location = new System.Drawing.Point(190, 43);
            this.txtContactoTecnico.Margin = new System.Windows.Forms.Padding(4);
            this.txtContactoTecnico.Name = "txtContactoTecnico";
            this.txtContactoTecnico.Size = new System.Drawing.Size(99, 22);
            this.txtContactoTecnico.TabIndex = 3;
            this.txtContactoTecnico.TextChanged += new System.EventHandler(this.textBox2_TextChanged);
            // 
            // txtDescricao
            // 
            this.txtDescricao.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.txtDescricao.Location = new System.Drawing.Point(13, 84);
            this.txtDescricao.Margin = new System.Windows.Forms.Padding(4);
            this.txtDescricao.Name = "txtDescricao";
            this.txtDescricao.Size = new System.Drawing.Size(409, 114);
            this.txtDescricao.TabIndex = 4;
            this.txtDescricao.Text = "";
            // 
            // btnCopy
            // 
            this.btnCopy.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Bottom | System.Windows.Forms.AnchorStyles.Right)));
            this.btnCopy.AutoEllipsis = true;
            this.btnCopy.Location = new System.Drawing.Point(343, 206);
            this.btnCopy.Margin = new System.Windows.Forms.Padding(4);
            this.btnCopy.MaximumSize = new System.Drawing.Size(79, 26);
            this.btnCopy.Name = "btnCopy";
            this.btnCopy.Size = new System.Drawing.Size(79, 26);
            this.btnCopy.TabIndex = 5;
            this.btnCopy.Text = "Copiar";
            this.btnCopy.UseVisualStyleBackColor = true;
            this.btnCopy.Click += new System.EventHandler(this.btnCopy_Click);
            // 
            // btnAfetacaoDispersa
            // 
            this.btnAfetacaoDispersa.BackColor = System.Drawing.Color.White;
            this.btnAfetacaoDispersa.Location = new System.Drawing.Point(3, 2);
            this.btnAfetacaoDispersa.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.btnAfetacaoDispersa.Name = "btnAfetacaoDispersa";
            this.btnAfetacaoDispersa.Size = new System.Drawing.Size(80, 80);
            this.btnAfetacaoDispersa.TabIndex = 6;
            this.btnAfetacaoDispersa.Text = "Afetação dispersa.";
            this.btnAfetacaoDispersa.UseVisualStyleBackColor = false;
            this.btnAfetacaoDispersa.Click += new System.EventHandler(this.btnAfetacaoDispersa_Click);
            // 
            // flowLayoutPanel1
            // 
            this.flowLayoutPanel1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.flowLayoutPanel1.Controls.Add(this.btnAfetacaoDispersa);
            this.flowLayoutPanel1.Controls.Add(this.btnEmAnalise);
            this.flowLayoutPanel1.Location = new System.Drawing.Point(12, 260);
            this.flowLayoutPanel1.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.flowLayoutPanel1.Name = "flowLayoutPanel1";
            this.flowLayoutPanel1.Size = new System.Drawing.Size(411, 190);
            this.flowLayoutPanel1.TabIndex = 7;
            // 
            // btnEmAnalise
            // 
            this.btnEmAnalise.BackColor = System.Drawing.Color.White;
            this.btnEmAnalise.Location = new System.Drawing.Point(89, 2);
            this.btnEmAnalise.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.btnEmAnalise.Name = "btnEmAnalise";
            this.btnEmAnalise.Size = new System.Drawing.Size(80, 80);
            this.btnEmAnalise.TabIndex = 7;
            this.btnEmAnalise.Text = "Em análise,";
            this.btnEmAnalise.UseVisualStyleBackColor = false;
            this.btnEmAnalise.Click += new System.EventHandler(this.btnEmAnalise_Click);
            // 
            // CountDown
            // 
            this.CountDown.Interval = 1000;
            this.CountDown.Tick += new System.EventHandler(this.CountDown_Tick);
            // 
            // DescriptionHelper
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(20)))), ((int)(((byte)(20)))), ((int)(((byte)(20)))));
            this.ClientSize = new System.Drawing.Size(435, 461);
            this.Controls.Add(this.flowLayoutPanel1);
            this.Controls.Add(this.btnCopy);
            this.Controls.Add(this.txtDescricao);
            this.Controls.Add(this.txtContactoTecnico);
            this.Controls.Add(this.txtNomeTecnico);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Font = new System.Drawing.Font("Microsoft Sans Serif", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Margin = new System.Windows.Forms.Padding(4);
            this.MinimumSize = new System.Drawing.Size(451, 400);
            this.Name = "DescriptionHelper";
            this.StartPosition = System.Windows.Forms.FormStartPosition.Manual;
            this.Text = "Description Helper";
            this.TopMost = true;
            this.flowLayoutPanel1.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtNomeTecnico;
        private System.Windows.Forms.TextBox txtContactoTecnico;
        private System.Windows.Forms.RichTextBox txtDescricao;
        private System.Windows.Forms.Button btnCopy;
        private System.Windows.Forms.Button btnAfetacaoDispersa;
        private System.Windows.Forms.FlowLayoutPanel flowLayoutPanel1;
        private System.Windows.Forms.Timer CountDown;
        private System.Windows.Forms.Button btnEmAnalise;
    }
}

