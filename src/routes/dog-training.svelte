<script>
  import FeaturedProduct from '$lib/FeaturedProduct.svelte';
</script>

<div class="container">
  <section class="text-blueGray-700 ">
    <div class="flex flex-col items-center pt-4 md:flex-row">
      <div
        class="flex flex-col items-start mb-4 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0"
      >
        <h1 class="mb-8 text-4xl font-black tracking-tighter text-black md:text-5xl title-font">
          Accredited and Award Winning Dog Training
        </h1>
        <div class="flex flex-col justify-center lg:flex-row gap-x-2">
          <p class="flex mb-2 text-blueGray-600">
            <span
              class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
            >
              <i class="far fa-building text-blue-500" aria-hidden="true" />
            </span>Office Hours: Sunday - Friday: 10am - 6pm, Closed Saturday
          </p>
          <p class="flex mb-2 text-blueGray-600">
            <span
              class="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full"
            >
              <i class="fas fa-dog text-blue-500" aria-hidden="true" />
            </span><span>Training Hours: Vary based on class schedules</span>
          </p>
        </div>
        <div class="text-base leading-relaxed text-left text-blueGray-600">
          <p class="pt-2">
            We have three certified trainers on staff to assist you with all of your training needs.
            Our trainers are invested in your success and our mission is to provide positive
            reinforcement, force-free training to keep dogs in harmonious homes, and strengthen the
            bond between pet and pet parent.
          </p>
          <p class="pt-2">
            Smaller class sizes ensure you and your pet receive more individualized attention. Our
            classes work fluidly together to provide a well-rounded training experience, but are
            great individually as well.
          </p>
        </div>
      </div>
      <div class="max-w-sm lg:max-w-md">
        <img
          class="object-cover object-center rounded-lg "
          alt=""
          src="/images/abc-certified-dog-trainer.png"
        />
      </div>
    </div>
  </section>
  <div class="space-y-4">
    <section class="text-blueGray-700 ">
      <div class="py-12">
        <div class="flex flex-wrap lg:flex-nowrap gap-2 md:gap-0">
          <FeaturedProduct
            heading="Puppy Kindergarten"
            price="$350"
            image="/images/dog.svg"
            feature="For dogs 5-12 months. Includes:"
            ctalink="https://PAMtrainingschedule.as.me/?appointmentType=category:Puppy%20Kindergarten"
            ctalabel="Register Now"
            ><span slot="content"
              ><li>Five week course.</li>
              <li>
                The first session is our orientation without dogs which is an important catalyst of
                any training program.
              </li>
              <li>
                Learn how to teach your puppy basic manners including, sit, down, go to your place,
                loose leash walking, and more!
              </li>
              <li>Working through distractions and real life situations.</li>
              <li>Weekly practice guides.</li>
              <li>
                Access to your trainer during office hours for the length of your program via phone
                or email.
              </li>
              <li>
                Move up to our next level of training, Basic Manners, after graduation and receive
                $50 off.
              </li></span
            >
          </FeaturedProduct>

          <FeaturedProduct
            heading="Basic Manners"
            price="$350"
            image="/images/dog_2.svg"
            feature="For dogs 12 months and older. Includes:"
            ctalink="https://PAMtrainingschedule.as.me/?appointmentType=category:Basic%20Manners"
            ctalabel="Register Now"
            ><span slot="content"
              ><li>Five week course</li>
              <li>
                The first session is our orientation without dogs which is an important catalyst of
                any training program.
              </li>
              <li>
                Learn how to teach your dog basic manners including stay, heel, recall, and more
              </li>
              <li>Working through distractions and real life situations.</li>
              <li>Weekly practice guides.</li>
              <li>
                Access to your trainer during office hours for the length of your program via phone
                or email.
              </li>
              <li>
                Move up to our next level of training, Intermediate Manners, after graduation and
                receive $50 off.
              </li></span
            >
          </FeaturedProduct>

          <FeaturedProduct
            heading="Day Training Package"
            price="$1500 per dog"
            image="/images/dog_3.svg"
            ctalink="https://PAMtrainingschedule.as.me/?appointmentType=category:Basic%20Manners"
            ctalabel="Register Now"
          >
            <span slot="feature">
              <div class="space-y-4 pb-4">
                <p>
                  We take your pup on the learning experience of a lifetime! You drop your best
                  friend off at our training center between 9 am and 10 am. We do four hours of
                  training and socialization exercises.
                </p>

                <p>
                  In between training we do play sessions, rest sessions, and lots of walks. Then
                  you pick up your best friend between 3 pm and 4 pm.
                </p>

                <p>This package includes:</p>
              </div>
            </span>
            <span slot="content">
              <li>Five full days of training</li>
              <li>
                Files containing communication videos and written handouts to know how to keep your
                pup trained at home
              </li>
              <li>Access to your trainer during business hours to answer all of your questions</li>
              <li>A transfer session to go over training with you</li>
            </span>

            <span slot="subcontent">
              <p class="pt-4">
                We require an orientation and your first session will include a training and
                behavioral assessment.
              </p>
            </span>
          </FeaturedProduct>
        </div>
      </div>
    </section>
  </div>
  <div class="container">
    <div class="row py-3">
      <div class="pricing-container">
        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="Private-One-On-One-Training">Private One-On-One Training</h2>
          <p>For dogs of all ages. Includes:</p>
          <ul class="list-disc list-inside ml-4">
            <li>Five sessions in our Training Center of customized training curriculum</li>
            <li>Working through distractions and real life situations</li>
            <li>Weekly practice guides</li>
            <li>
              Access to your trainer during office hours for the length of your program via phone or
              email
            </li>
            <li>One free training tune-up session, redeemable within six months of graduation</li>
          </ul>
          <p>$700</p>
          <a
            class="btn paws-btn_secondary"
            href="https://PAMtrainingschedule.as.me/?appointmentType=31294431">Schedule Now</a
          >
        </div>
        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="Day-Training">Day Training</h2>
          <p>
            We take your pup on the learning experience of a lifetime! You drop your best friend off
            at our training center between 9 am and 11 am. We do five hours of training and
            socialization exercises with a maximum of three other dogs.
          </p>
          <p>
            In between training we do play sessions, rest sessions, and lots of walks. Then you pick
            up your best friend between 4 pm and 5:30 pm.
          </p>
          <p>
            For each day of training you will receive a file containing demo videos from our
            training library and written handouts to work with your pup at home.
          </p>
          <p>
            Each week a transfer session is required so we can be sure you are set up for training
            success!
          </p>
          <p>
            We require an orientation and a minimum of five sessions per dog and your first session
            will include a training and behavioral assessment.
          </p>
          <p>Package price: $1250</p>
          <a
            class="btn paws-btn_secondary"
            href="https://PAMtrainingschedule.as.me/?appointmentType=category:Day%20Training"
            >Schedule Now</a
          >
        </div>
        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="In-Home-Private-Training">In-Home Private Training</h2>
          <p>
            Our private in-home training program is done in your home and customized for you and
            your dog. This is a five week program and includes:
          </p>
          <ul class="list-disc list-inside ml-4">
            <li>Five to ten private sessions in your home depending on your needs</li>
            <li>One orientation and goal planning session in your home</li>
            <li>One free training tune-up session, redeemable within six months of graduation</li>
            <li>
              Full access to your trainer by phone or email during your program for any questions or
              assistance you may need
            </li>
          </ul>
          <p>Starting at $1300</p>
          <a
            class="btn paws-btn_secondary"
            href="https://PAMtrainingschedule.as.me/?appointmentType=31294470">Schedule Now</a
          >
        </div>
        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="Lunch-and-Learn-Training">Lunch and Learn Training</h2>
          <p>
            Are you currently enrolled in one of our training programs or have graduated from one of
            our training programs and need consistency in walk training to reinforce and keep your
            training on track? Book a walk with a certified trainer to fine tune and consistently
            practice polite walking skills (heel and loose leash walking for example). Perfect for
            the busy pet parent!
          </p>
          <p>
            <span class="font-italic"
              >*Prerequisite: Current enrollment or graduation from any Paws Around Motown training
              program</span
            >
          </p>
          <p>45-60 minute walk $55</p>
          <p>Purchase more and save!</p>
          <ul class="list-disc list-inside ml-4">
            <li>Package of 10: $500 <span class="font-italic">(save $50)</span></li>
            <li>Package of 20: $950 <span class="font-italic">(save $150)</span></li>
          </ul>
          <a
            class="btn paws-btn_secondary"
            href="https://www.timetopet.com/portal/pawsaroundmotown/create-account">Schedule Now</a
          >
        </div>
        <div class="mb-4 space-y-4">
          <h2 class="text-3xl" id="Training-for-Pet-Parents">
            Pet Parents - Pet First-Aid and CPR
          </h2>
          <p>
            There is no 911 for pets. This course leads to certification in Pet First Aid and CPR so
            that you can save your pet's life in an emergency.
          </p>
          <h4>Live online five-hour pet first-aid and CPR class</h4>
          <ul class="list-disc list-inside ml-4">
            <li>General Course - $75</li>
            <li>Certification Course - $135</li>
          </ul>
          <a class="btn paws-btn_secondary" href="tel:248-729-6772">Call now</a>
        </div>
      </div>
    </div>
  </div>
</div>
