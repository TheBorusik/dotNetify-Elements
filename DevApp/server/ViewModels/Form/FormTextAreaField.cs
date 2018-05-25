﻿using DotNetify;
using DotNetify.Elements;

namespace dotNetify_Elements
{
   public class FormTextAreaField : BaseVM
   {
      public FormTextAreaField()
      {
         var markdown = Utils.GetResource("dotNetify_Elements.server.Docs.Form.TextAreaField.md").Result;

         AddProperty("Overview", markdown.GetMarkdownSection(null, "Property Type"));
         AddProperty("API", markdown.GetMarkdownSection("Property Type"));
      }
   }

   public class TextAreaFieldExample : BaseVM
   {
      public TextAreaFieldExample()
      {
         AddProperty<string>("Comment")
            .WithAttribute(this, new TextAreaFieldAttribute
            {
               Label = "Comment:",
               Placeholder = "Leave a comment",
               MaxLength = 200,
               Rows = 4
            }).
            WithRequiredValidation(this, "You must leave a comment");
      }
   }

   public class TextAreaFieldCustomize : BaseVM
   {
      public TextAreaFieldCustomize()
      {
         AddProperty<string>("MyField")
            .WithAttribute(this, new TextAreaFieldAttribute { Label = "Label:", Placeholder = "Placeholder" });
      }
   }
}