using System;
using System.Windows.Forms;

namespace DescriptionHelper
{
    public partial class DescriptionHelper : Form
    {
        private string nomeTecnico = "*Nome do Técnico*";
        private string contactoTecnico = "*Contacto do Técnico*";

        private bool isDefault = true;

        public DescriptionHelper()
        {
            InitializeComponent();

            //comboBox1.SelectedIndex = 0;
            txtDescricao.Text = $"O técnico {nomeTecnico} ({contactoTecnico}) contacta e informa que ";
        }

        public void LoadDefaults()
        {
            isDefault = true;
            btnCopy.Text = "Copiar";
        }

        private void UpdateDescription()
        {
            if (txtNomeTecnico.Text == "")
            {
                isDefault = true;
                nomeTecnico = "*Nome do Técnico*";
            }

            if (txtContactoTecnico.Text == "")
            {
                isDefault = true;
                contactoTecnico = "*Contacto do Técnico*";
            }

            isDefault = false;

            txtDescricao.Text = $"O técnico {nomeTecnico} ({contactoTecnico}) contacta e informa que ";
        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {
            nomeTecnico = txtNomeTecnico.Text;
            UpdateDescription();
        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {
            contactoTecnico = txtContactoTecnico.Text;
            UpdateDescription();
        }

        private void CountDown_Tick(object sender, EventArgs e)
        {
            CountDown.Enabled = false;
            LoadDefaults();
        }

        private void btnCopy_Click(object sender, EventArgs e)
        {

            Clipboard.SetText(txtDescricao.Text);
            btnCopy.Text = "Copiado";
            CountDown.Start();
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
            if (listBox1.SelectedIndex != -1)
            {
                Clipboard.SetText(listBox1.Text);
                btnCopy.Text = "Copiado";
                CountDown.Start();
            }
            else
            {
                listBox1.SelectedIndex = 0;
            }
        }
    }
}
