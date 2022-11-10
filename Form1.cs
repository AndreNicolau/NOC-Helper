using System;
using System.Windows.Forms;

namespace DescriptionHelper
{
    public partial class DescriptionHelper : Form
    {
        private string nomeTecnico = "*Nome do Técnico*";
        private string contactoTecnico = "*Contacto do Técnico*";

        public DescriptionHelper()
        {
            InitializeComponent();

            txtDescricao.Text = $"O técnico {nomeTecnico} ({contactoTecnico}) contacta e informa que ";
        }

        public void LoadDefaults()
        {
            btnAfetacaoDispersa.Text = "Afetação dispersa.";
            btnEmAnalise.Text = "Em análise.";

            btnCopy.Text = "Copiar";
        }

        private void UpdateDescription()
        {
            if (txtNomeTecnico.Text == "")
            {
                nomeTecnico = "*Nome do Técnico*";
            }

            if (txtContactoTecnico.Text == "")
            {
                contactoTecnico = "*Contacto do Técnico*";
            }

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

        private void btnAfetacaoDispersa_Click(object sender, EventArgs e)
        {
            Clipboard.SetText(btnAfetacaoDispersa.Text);
            btnAfetacaoDispersa.Text = "Copiado";
            CountDown.Start();

        }
        private void btnEmAnalise_Click(object sender, EventArgs e)
        {
            Clipboard.SetText(btnEmAnalise.Text);
            btnEmAnalise.Text = "Copiado";
            CountDown.Start();
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
    }
}
