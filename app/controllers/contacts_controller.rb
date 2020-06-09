class ContactsController < ApplicationController
  def new
    @contact = Contact.new
  end
  def create
    @contact = Contact.create(contact_params)
    if @contact.save
      redirect_to root_path
      flash[:notice] = "Merci pour le message, nous vous recontactons au plus vite"
    else
      redirect_to root_path
    end
  end

  private

  def set_contact
    @contact = Contact.find(params[:id])
  end

  def contact_params
    params.require(:contact).permit(:first_name,:email,:location,:phone,:offers,:subject,:project)
  end
end
