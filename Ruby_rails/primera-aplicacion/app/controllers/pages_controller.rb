class PagesController < ApplicationController
  def hola
    @user = User.find(params[:id])
  end
end
